import GitHubCalendarClient from "./GitHubCalendarClient";
import GitHubLogo from "../ui/GitHubLogo";
import { ArrowUpRight } from "lucide-react";

// Fetch GitHub contribution count server-side
const getGitHubContributions = async (): Promise<number | null> => {
  try {
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PATH;
    if (!token) return null;

    // Swapped for native fetch for Next.js Data Cache support
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
            }
          }
        }`,
      }),
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    const json = await res.json();
    return json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions;
  } catch (error) {
    console.error("Failed to fetch GitHub contributions:", error);
    return null;
  }
};

const GitHub = async () => {
  const contributions = await getGitHubContributions();

  return (
    <section id="github" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      
      {/* Header - Matching Intro/About styling */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Open Source
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          GitHub Activity
        </p>
      </div>

      {/* Main Container Card */}
      <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 md:p-8">
        
        {/* Stats & Link Row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-1">
            <p className="text-base font-medium text-neutral-600 dark:text-neutral-400">
              Total Contributions
            </p>
            <span className="text-4xl font-black tracking-tight text-emerald-500">
              {contributions ? contributions.toLocaleString() : "1,200+"}
            </span>
          </div>

          <a
            href="https://github.com/sahilmishra03"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-bold text-neutral-700 transition-all hover:bg-neutral-50 hover:shadow-sm active:scale-95 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            <GitHubLogo size={18} />
            View Profile
            <ArrowUpRight size={16} className="text-neutral-400" />
          </a>
        </div>

        {/* GitHub Calendar Component */}
        <div className="rounded-xl bg-white dark:bg-neutral-900/80">
          <GitHubCalendarClient username="sahilmishra" />
        </div>
      </div>
    </section>
  );
};

export default GitHub;