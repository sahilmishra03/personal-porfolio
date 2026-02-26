"use client";

import React from "react";
import { useTheme } from "@/hooks/ThemeProvider";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e.clientX, e.clientY)}
      data-slot="tooltip-trigger"
      data-variant="ghost"
      data-size="icon"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 group/toggle extend-touch-target size-8 cursor-pointer rounded-lg bg-neutral-100 p-2 text-neutral-500 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:bg-[#1e1e21] dark:text-white/80 dark:shadow-[0_4px_0_0_#0a0a0a] dark:hover:shadow-[0_2px_0_0_#0a0a0a] dark:active:shadow-none"
      data-state={isDark ? "open" : "closed"}
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`size-4.5 transition-all duration-300 ${isDark ? 'rotate-0 opacity-100' : 'rotate-180 opacity-60'}`}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
        <path d="M12 3l0 18"></path>
        <path d="M12 9l4.65 -4.65"></path>
        <path d="M12 14.3l7.37 -7.37"></path>
        <path d="M12 19.6l8.85 -8.85"></path>
      </svg>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
