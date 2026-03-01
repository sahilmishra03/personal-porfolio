import { Cpu, Layers, MapPin } from "lucide-react";

import projectsData from "../../data/projects.json";
import { techStack } from "../../data/techStack";
import GitHubLogo from "../ui/GitHubLogo";

// Fetch real GitHub data
const getGitHubData = async () => {
  try {
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PATH;
    if (!token) return { commits: null, contributions: null };

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
            }
          }
        }`,
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const json = await res.json();
    const user = json?.data?.user;

    return {
      commits:
        user?.contributionsCollection?.contributionCalendar?.totalContributions,
      contributions:
        user?.contributionsCollection?.contributionCalendar?.totalContributions,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
    return { commits: null, contributions: null };
  }
};

// Helper function to count unique technologies from TechStack section
const getUniqueTechCount = () => {
  return techStack.length;
};

export const Stats = async () => {
  const githubData = await getGitHubData();

  const stats = [
    {
      label: "Projects Shipped",
      value: String(projectsData.length),
      icon: Layers,
    },
    {
      label: "GitHub Commits",
      value: githubData.commits ? String(githubData.commits) : "413",
      icon: GitHubLogo,
    },
    {
      label: "Technologies",
      value: String(getUniqueTechCount()),
      icon: Cpu,
    },
    {
      label: "Based in",
      value: "India",
      icon: MapPin,
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          // Upgraded from a harsh border to a premium, subtle card with a hover lift
          className="group flex flex-col items-start justify-between gap-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-black/50"
        >
          <stat.icon
            size={22}
            className="mb-2 text-neutral-700 transition-transform duration-300 group-hover:scale-110 dark:text-neutral-300"
          />
          <span className="text-lg font-bold whitespace-nowrap text-neutral-900 dark:text-white">
            {stat.value}
          </span>
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};
