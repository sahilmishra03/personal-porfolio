import { ArrowUpRight } from "lucide-react";

import GitHubLogo from "../ui/GitHubLogo";
import GitHubCalendarClient from "./GitHubCalendarClient";
import { getGitHubData } from "@/lib/githubData";

// Reusable stat block for a cleaner layout
const StatBlock = ({
  label,
  value,
  valueClass = "text-neutral-900 dark:text-white",
}: {
  label: string;
  value: React.ReactNode;
  valueClass?: string;
}) => (
  <div className="flex flex-col gap-1 rounded-xl border border-neutral-200 bg-white p-3 sm:p-4 dark:border-neutral-800/60 dark:bg-neutral-950/50">
    <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
      {label}
    </span>
    <span
      className={`text-xl font-black tracking-tight sm:text-2xl ${valueClass}`}
    >
      {value}
    </span>
  </div>
);

const GitHub = async () => {
  const githubData = await getGitHubData();
  const currentYear = new Date().getFullYear();
  const lastYear = currentYear - 1;

  // Always use real-time data - no hardcoded fallbacks
  if (
    !githubData.totalCommits ||
    githubData.thisYearContributions === null ||
    githubData.lastYearContributions === null
  ) {
    return (
      <section id="github" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
        <div className="mb-8">
          <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Open Source
          </h2>
          <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            GitHub Activity
          </p>
        </div>
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-800 dark:bg-red-950/50">
          <p className="text-red-600 dark:text-red-400">
            Unable to fetch GitHub contributions. Please check your connection
            and try again later.
          </p>
        </div>
      </section>
    );
  }

  const totalDisplay = githubData.totalCommits.toLocaleString();
  const thisYearDisplay = githubData.thisYearContributions.toLocaleString();
  const lastYearDisplay = githubData.lastYearContributions.toLocaleString();
  const growthValue = githubData.growth || 0;
  const growthString = `${growthValue >= 0 ? "+" : ""}${growthValue.toFixed(1)}%`;
  const growthColor = growthValue >= 0 ? "text-emerald-500" : "text-red-500";

  return (
    <section id="github" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Open Source
        </h2>
        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          GitHub Activity
        </p>
      </div>

      {/* Main Container Card */}
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 shadow-sm transition-all hover:border-neutral-300 sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700">
        {/* Profile Header & Stats */}
        <div className="mb-8 flex flex-col gap-6">
          {/* Top Row: Title & Link */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-neutral-900 dark:text-white">
                Contribution Overview
              </h3>
            </div>
            <a
              href="https://github.com/sahilmishra03"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3.5 py-2 text-xs font-bold text-neutral-700 transition-all hover:bg-neutral-50 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              <GitHubLogo size={14} />
              <span className="hidden sm:inline">View Profile</span>
              <ArrowUpRight size={14} className="sm:hidden" />
            </a>
          </div>

          {/* Clean Stats Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <StatBlock
              label="Total Commits"
              value={totalDisplay}
              valueClass="text-emerald-500"
            />
            <StatBlock label={`${currentYear}`} value={thisYearDisplay} />
            <StatBlock label={`${lastYear}`} value={lastYearDisplay} />
            <StatBlock
              label="YoY Growth"
              value={growthString}
              valueClass={growthColor}
            />
          </div>
        </div>

        {/* GitHub Calendar Component Wrapper */}
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800/60 dark:bg-neutral-950/50">
          <GitHubCalendarClient />
        </div>
      </div>
    </section>
  );
};

export default GitHub;
