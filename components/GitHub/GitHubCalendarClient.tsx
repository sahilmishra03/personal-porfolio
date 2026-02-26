"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/hooks/ThemeProvider";

// Type definitions for GitHubCalendar props
interface GitHubCalendarProps {
  username: string;
  colorScheme?: "light" | "dark";
  blockSize?: number;
  blockMargin?: number;
  fontSize?: number;
  theme?: {
    light: string[];
    dark: string[];
  };
  "aria-label"?: string;
}

// Dynamically import with SSR disabled to avoid hydration mismatch
const GitHubCalendar = dynamic<GitHubCalendarProps>(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[150px] w-full items-center justify-center rounded-xl bg-neutral-50/50 dark:bg-neutral-900/50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-neutral-300 border-t-emerald-500"></div>
          <span className="text-xs font-medium text-neutral-500">Loading activity...</span>
        </div>
      </div>
    ),
  }
);

interface GitHubCalendarClientProps {
  username: string;
}

const GitHubCalendarClient = ({ username }: GitHubCalendarClientProps) => {
  const { isDark } = useTheme();

  return (
    <div className="relative">
      <div>
        <GitHubCalendar
          username="sahilmishra03"
          colorScheme={isDark ? "dark" : "light"}
          // Sizing adjusted for a more modern, compact look
          blockSize={10}
          blockMargin={2}
          fontSize={10}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
          aria-label="GitHub Contribution Calendar"
        />
      </div>
    </div>
  );
};

export default GitHubCalendarClient;