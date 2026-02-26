"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { ProjectType } from "./Projects";
import ProjectsButton from "./ProjectsButton";
import { useTheme } from "@/hooks/ThemeProvider";
import { getTechLogoUrl } from "@/components/HeroSection/techStackLogos";

// Tech icon mappings using centralized system
const getTechIcon = (tech: string) => {
  const iconMap: Record<string, string> = {
    React: "react",
    "React.js": "react",
    "Node.js": "nodejs",
    Express: "express",
    "Express.js": "express",
    MongoDB: "mongodb",
    Redis: "redis",
    BullMQ: "redis",
    "Socket.io": "socketio",
    JWT: "nodejs",
    "Discord.js": "discord",
    "Cloudflare R2": "cloudflare",
    dns2: "nodejs",
    dotenv: "nodejs",
    Gemini: "gcp",
  };
  return iconMap[tech] || null;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const { name, description, image, tech, status, link, githubLink } = project;
  const router = useRouter();
  const { isDark } = useTheme();

  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    // Prevent navigation if clicking on external links (the ProjectsButton component)
    if ((e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(`/projects/${project.id}`);
  };

  // Get tech icon URL with theme support
  const getTechIconUrl = (techName: string) => {
    const iconId = getTechIcon(techName);
    
    // Handle special cases for non-skillicons icons first
    if (techName === "Google Calendar API") {
      return "https://cdn.simpleicons.org/googlecalendar";
    }
    if (techName === "Resend") {
      return "https://cdn.simpleicons.org/resend";
    }

    if (!iconId) return null;
    
    const theme = isDark ? 'dark' : 'light';
    return getTechLogoUrl(iconId, theme);
  };

  // Fallback string for status if it's undefined
  const currentStatus = status || "Unknown";
  const isOperational = currentStatus.includes("Operational");

  return (
    // Replaced the nested wrapper divs with one clean, accessible container
    <div
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick(e)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:shadow-black/50"
    >
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden border-b border-neutral-200 dark:border-neutral-800 sm:h-52">
        <Image
          src={image}
          alt={`Screenshot of ${name}`}
          fill // Swapped width/height for standard Next.js 'fill' on responsive cards
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* Title & External Links */}
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {name}
          </h3>
          {/* Prevent flex-shrink so the buttons don't get squished by long titles */}
          <div className="shrink-0">
            <ProjectsButton githubLink={githubLink} link={link} />
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>

        {/* Tech Stack Tags (Pushed to bottom using mt-auto) */}
        <div className="mb-5 mt-auto flex flex-wrap gap-2">
          {tech.map((t) => {
            const iconUrl = getTechIconUrl(t);
            return (
              <span
                key={t}
                className="flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2 py-1 text-[11px] font-semibold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300"
              >
                {iconUrl && (
                  <Image
                    src={iconUrl}
                    alt={`${t} icon`}
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 object-contain"
                    unoptimized
                  />
                )}
                {t}
              </span>
            );
          })}
        </div>

        {/* Footer: Status & View Details */}
        <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
          
          {/* Operational Status Indicator */}
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white py-1 pl-2 pr-3 dark:border-neutral-800 dark:bg-neutral-900">
            {/* Ping animation dot */}
            <div className="relative flex h-2 w-2 items-center justify-center">
              {isOperational && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-40"></span>
              )}
              <span 
                className={`relative inline-flex h-1.5 w-1.5 rounded-full ${isOperational ? "bg-green-500" : "bg-red-500"}`}
              ></span>
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-wide ${isOperational ? "text-green-600 dark:text-green-400" : "text-red-500"}`}>
              {isOperational ? "Operational" : "Offline"}
            </span>
          </div>

          {/* View Details Hint */}
          <div className="flex items-center gap-1 text-xs font-semibold text-neutral-500 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
            View Details
            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;