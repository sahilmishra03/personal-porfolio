"use client";

import { useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";

import { getTechLogoUrl } from "@/components/HeroSection/techStackLogos";
import { useTheme } from "@/hooks/ThemeProvider";
import { ProjectType } from "@/types/project";

import ProjectsButton from "./ProjectsButton";

// Tech icon mappings
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
    // Technologies from JSON data
    Flutter: "flutter",
    HTML5: "html",
    "Tailwind CSS": "tailwind",
    JavaScript: "js",
    Firebase: "firebase",
    Dart: "dart",
    Vercel: "vercel",
  };
  return iconMap[tech] || null;
};

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const {
    title,
    name,
    shortDescription,
    description,
    excerpt,
    technologies,
    techStack,
    status,
    liveUrl,
    link,
    githubUrl,
    githubLink,
  } = project;
  const router = useRouter();
  const { isDark } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);

  const projectName = (title || name || "Untitled Project")
    .split("–")[0]
    .trim();
  const projectDescription =
    shortDescription || description || excerpt || "No description available";

  // Always use imagePath from JSON data - this is the correct approach
  const finalImagePath = project.imagePath || `/mockups/0.png`; // Only fallback to 0.png if no JSON path

  const handleCardClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    if (
      (e.target as HTMLElement).closest("a") ||
      (e.target as HTMLElement).closest("button")
    ) {
      return;
    }
    router.push(`/projects/${project.id}`);
  };

  const techArray = (() => {
    if (techStack && Array.isArray(techStack)) {
      return techStack.map(
        (tech: { name: string; iconId: string }) => tech.name
      );
    }
    if (Array.isArray(technologies)) return technologies;
    return [];
  })();

  const getTechIconUrl = (techName: string) => {
    // Find the tech object from techStack to get its iconId
    const techObj = techStack?.find(
      (tech: { name: string; iconId: string }) => tech.name === techName
    );
    const iconId = techObj?.iconId || getTechIcon(techName);
    if (techName === "Google Calendar API")
      return "https://cdn.simpleicons.org/googlecalendar";
    if (techName === "Resend") return "https://cdn.simpleicons.org/resend";
    if (!iconId) return null;
    return getTechLogoUrl(iconId, isDark ? "dark" : "light");
  };

  const currentStatus = status || "All Systems Operational";

  // Helper to determine status color styling
  const getStatusColor = () => {
    if (
      currentStatus.includes("Open") ||
      currentStatus.includes("All Systems Operational")
    ) {
      return {
        bg: "bg-green-100/50 dark:bg-green-500/10",
        text: "text-green-700 dark:text-green-400",
        dot: "bg-green-500",
      };
    } else if (currentStatus.includes("Active")) {
      return {
        bg: "bg-yellow-100/50 dark:bg-yellow-500/10",
        text: "text-yellow-700 dark:text-yellow-400",
        dot: "bg-yellow-500",
      };
    } else if (currentStatus.includes("Closed")) {
      return {
        bg: "bg-red-100/50 dark:bg-red-500/10",
        text: "text-red-700 dark:text-red-400",
        dot: "bg-red-500",
      };
    } else {
      return {
        bg: "bg-neutral-100 dark:bg-neutral-800",
        text: "text-neutral-600 dark:text-neutral-400",
        dot: "bg-neutral-500",
      };
    }
  };

  const statusColor = getStatusColor();

  return (
    <div
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleCardClick(e)}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:shadow-black/50"
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
        {!imageLoaded && (
          <div className="absolute inset-0 z-0 animate-pulse bg-neutral-200 dark:bg-neutral-800"></div>
        )}

        {/* Use project's imagePath if available, otherwise fall back to sequence */}
        <Image
          key={finalImagePath}
          src={finalImagePath}
          alt={`Screenshot of ${projectName}`}
          fill
          loading="lazy"
          className={`z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setImageLoaded(true)}
          unoptimized
        />
      </div>

      {/* MOBILE FIX: Reduced padding from p-5 to p-4 on small screens */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {projectName}
          </h3>
          <div className="shrink-0">
            <ProjectsButton
              githubLink={githubUrl || githubLink}
              link={liveUrl || link}
            />
          </div>
        </div>

        {/* MOBILE FIX: Slightly smaller text on mobile to fit content better */}
        <p className="mb-6 line-clamp-3 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">
          {projectDescription}
        </p>

        <div className="mt-auto flex flex-col">
          <h4 className="mb-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Technologies
          </h4>

          {/* MOBILE FIX: Smaller gap on mobile */}
          <div className="mb-6 flex flex-wrap gap-2 sm:gap-3">
            {techArray.map((t: string) => {
              const iconUrl = getTechIconUrl(t);
              if (!iconUrl) return null;
              return (
                <span key={t} className="flex items-center justify-center">
                  <Image
                    src={iconUrl}
                    alt={`${t} icon`}
                    width={24}
                    height={24}
                    loading="lazy"
                    className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                    unoptimized
                  />
                </span>
              );
            })}
          </div>

          {/* MOBILE FIX: Added flex-wrap and gap-y-3 so it stacks if there's no room */}
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-3 border-t border-neutral-200 pt-4 dark:border-neutral-800">
            <div
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors ${statusColor.bg} ${statusColor.text}`}
            >
              <span
                className={`relative inline-flex h-2 w-2 shrink-0 rounded-full ${statusColor.dot}`}
              ></span>
              {/* MOBILE FIX: whitespace-nowrap prevents the text from wrapping onto two lines */}
              <span className="text-xs font-medium tracking-tight whitespace-nowrap sm:text-[13px]">
                {currentStatus}
              </span>
            </div>

            {/* MOBILE FIX: shrink-0 ensures the button never gets squished */}
            <div className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-neutral-500 transition-colors group-hover:text-neutral-900 hover:underline dark:group-hover:text-white">
              View Details
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
