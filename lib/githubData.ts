// Unified GitHub data fetching utility
export interface GitHubData {
  totalCommits: number | null;
  totalContributions: number | null;
  thisYearContributions: number | null;
  lastYearContributions: number | null;
  growth: number | null;
}

export const getGitHubData = async (): Promise<GitHubData> => {
  try {
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PATH;
    if (!token) {
      console.log("GitHub token not found, returning null values");
      return {
        totalCommits: null,
        totalContributions: null,
        thisYearContributions: null,
        lastYearContributions: null,
        growth: null,
      };
    }

    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    // Fetch comprehensive GitHub data
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `query {
          user(login: "sahilmishra03") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
              totalCommitContributions
              contributionYears
            }
          }
        }`,
      }),
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      console.error("GitHub API request failed:", res.status, res.statusText);
      return {
        totalCommits: null,
        totalContributions: null,
        thisYearContributions: null,
        lastYearContributions: null,
        growth: null,
      };
    }

    const json = await res.json();
    const user = json?.data?.user;

    if (!user) {
      console.error("No user data found in GitHub API response");
      return {
        totalCommits: null,
        totalContributions: null,
        thisYearContributions: null,
        lastYearContributions: null,
        growth: null,
      };
    }

    const totalContributions =
      user.contributionsCollection?.contributionCalendar?.totalContributions;
    const totalCommits =
      user.contributionsCollection?.totalCommitContributions;
    const years = user.contributionsCollection?.contributionYears || [];

    // Helper function for year fetching
    const fetchYearContributions = async (year: number) => {
      const yearRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query {
            user(login: "sahilmishra03") {
              contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }`,
        }),
      });

      if (!yearRes.ok) {
        console.error(`Failed to fetch ${year} contributions:`, yearRes.status);
        return 0;
      }

      const data = await yearRes.json();
      const contributions =
        data?.data?.user?.contributionsCollection?.contributionCalendar
          ?.totalContributions || 0;
      console.log(`${year} contributions:`, contributions);
      return contributions;
    };

    let thisYearContributions = 0;
    let lastYearContributions = 0;

    if (years.includes(currentYear)) {
      thisYearContributions = await fetchYearContributions(currentYear);
    }
    if (years.includes(lastYear)) {
      lastYearContributions = await fetchYearContributions(lastYear);
    }

    const growth =
      lastYearContributions > 0
        ? ((thisYearContributions - lastYearContributions) /
            lastYearContributions) *
          100
        : 0;

    console.log("Final GitHub data:", {
      totalCommits,
      totalContributions,
      thisYear: thisYearContributions,
      lastYear: lastYearContributions,
      growth,
    });

    return {
      totalCommits,
      totalContributions,
      thisYearContributions,
      lastYearContributions,
      growth,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return {
      totalCommits: null,
      totalContributions: null,
      thisYearContributions: null,
      lastYearContributions: null,
      growth: null,
    };
  }
};
