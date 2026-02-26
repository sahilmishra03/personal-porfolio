"use client";

import Image from "next/image";
import { useTheme } from "@/hooks/ThemeProvider";
import { getTechLogoUrl } from "./techStackLogos";

export const techStack = [
  { name: "Android Studio", iconId: "androidstudio", desc: "IDE" },
  { name: "Discord", iconId: "discord", desc: "Communication" },
  { name: "Docker", iconId: "docker", desc: "Containerization" },
  { name: "FastAPI", iconId: "fastapi", desc: "Backend Framework" },
  { name: "Figma", iconId: "figma", desc: "Design" },
  { name: "Firebase", iconId: "firebase", desc: "BaaS" },
  { name: "Flutter", iconId: "flutter", desc: "Mobile Framework" },
  { name: "Git", iconId: "git", desc: "Version Control" },
  { name: "GitHub", iconId: "github", desc: "Git Hosting" },
  { name: "Gmail", iconId: "gmail", desc: "Email" },
  { name: "JavaScript", iconId: "js", desc: "Language" },
  { name: "Dart", iconId: "dart", desc: "Language" },
  { name: "CSS", iconId: "css", desc: "Styling" },
  { name: "Postman", iconId: "postman", desc: "API Testing" },
  { name: "PostgreSQL", iconId: "postgres", desc: "Database" },
  { name: "Python", iconId: "py", desc: "Language" },
  { name: "TypeScript", iconId: "ts", desc: "Language" },
  { name: "Ubuntu", iconId: "ubuntu", desc: "OS" },
  { name: "VS Code", iconId: "vscode", desc: "IDE" },
  { name: "Vercel", iconId: "vercel", desc: "Deployment" },
  { name: "Next.js", iconId: "nextjs", desc: "Framework" },
  { name: "Notion", iconId: "notion", desc: "Productivity" },
  { name: "npm", iconId: "npm", desc: "Package Manager" },
  { name: "Java", iconId: "java", desc: "Language" },
];

const TechStack = () => {
  const { isDark } = useTheme();

  // Get icon URL using centralized system with theme support
  const getIconUrl = (tech: { name: string; iconId: string }) => {
    const theme = isDark ? 'dark' : 'light';
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
      <div className="flex w-full flex-wrap gap-6 sm:gap-8 pt-2">
        {techStack.map((tech) => (
          <div key={tech.name} className="group relative flex h-14 w-14 items-center justify-center transition-transform hover:scale-110">
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