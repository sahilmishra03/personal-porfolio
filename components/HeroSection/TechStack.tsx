"use client";

import Image from "next/image";

import { useTheme } from "@/hooks/ThemeProvider";

import { techStack } from "../../data/techStack";
import { getTechLogoUrl } from "./techStackLogos";

const TechStack = () => {
  const { isDark } = useTheme();

  // Get icon URL using centralized system with theme support
  const getIconUrl = (tech: { name: string; iconId: string }) => {
    const theme = isDark ? "dark" : "light";
    return getTechLogoUrl(tech.iconId, theme);
  };

  return (
    <section className="mt-15 flex w-full flex-col space-y-6">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm text-neutral-500">Expertise</p>
        <h2 className="flex items-center gap-2 text-3xl font-bold">
          Tech Stack & Tools
        </h2>
      </div>

      {/* FIXED ALIGNMENT HERE: 
        Removed 'justify-evenly', increased gap slightly to 'gap-6 sm:gap-8' 
        so the grid looks breathable and aligned to the left. 
      */}
      <div className="flex w-full flex-wrap gap-6 pt-2 sm:gap-8">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex h-14 w-14 items-center justify-center transition-transform hover:scale-110"
          >
            {/* Clean, borderless, transparent icon */}
            <Image
              src={getIconUrl(tech)}
              alt={tech.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              unoptimized
            />

            {/* Tooltip - shows on hover */}
            <div className="pointer-events-none absolute -top-14 left-1/2 z-20 -translate-x-1/2 rounded-lg border bg-white px-3 py-2 text-center text-xs whitespace-nowrap opacity-0 transition-all duration-200 group-hover:opacity-100 dark:bg-neutral-800">
              <div className="mb-0.5 font-bold">{tech.name}</div>
              <div className="text-[10px] font-medium text-neutral-500">
                {tech.desc}
              </div>
              {/* Tooltip arrow */}
              <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b bg-white dark:bg-neutral-800"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
