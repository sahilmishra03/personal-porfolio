import { Code, Cpu, Layers, MapPin } from "lucide-react";
import GitHubLogo from "../ui/GitHubLogo";

export const stats = [
  {
    label: "Projects Shipped",
    value: "5+",
    icon: Layers,
  },
  {
    label: "GitHub Commits",
    value: "500+",
    icon: GitHubLogo,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: Cpu,
  },
  {
    label: "Based in",
    value: "India",
    icon: MapPin,
  },
];

export const Stats = async () => {
  let githubCommits = "500+"; // Fallback value

  try {
    // Standardized to GITHUB_TOKEN (make sure to update your .env file)
    const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PATH; 
    
    if (token) {
      // Swapped axios for native fetch to leverage Next.js caching
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `query { user(login: "sahilmishra") { contributionsCollection { totalCommitContributions } } }`,
        }),
        next: { revalidate: 3600 }, // Caches the result for 1 hour so you don't hit API limits
      });

      const json = await res.json();
      const total = json?.data?.user?.contributionsCollection?.totalCommitContributions;
      
      if (total != null) {
        githubCommits = String(total);
      }
    }
  } catch (err) {
    console.error("GitHub fetch failed:", err);
  }

  // Safely inject the fetched commits without mutating the global array
  const displayStats = stats.map((stat) => ({
    ...stat,
    value: stat.label === "GitHub Commits" ? githubCommits : stat.value,
  }));

  return (
    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {displayStats.map((stat) => (
        <div
          key={stat.label}
          // Upgraded from a harsh border to a premium, subtle card with a hover lift
          className="group flex flex-col items-start justify-between gap-1 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-black/50"
        >
          <stat.icon 
            size={22} 
            className="mb-2 text-neutral-700 transition-transform duration-300 group-hover:scale-110 dark:text-neutral-300" 
          />
          <span className="text-lg font-bold text-neutral-900 dark:text-white whitespace-nowrap">
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

export const PersonalInfo = async () => {
  return (
    <div className="mt-4">
      <div
        className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-neutral-900"
      >
        <div className="flex items-center gap-4">
          {/* Improved Pulse Animation Dot */}
          <div className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </div>
          
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
              Current Focus
            </span>
            <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Building OpenForge
            </span>
          </div>
        </div>
        
        <Code size={18} className="text-neutral-400 transition-colors duration-300 hover:text-neutral-700 dark:hover:text-neutral-200" />
      </div>
    </div>
  );
};