import React from "react";

import Link from "next/link";

import { Globe } from "lucide-react";

import GitHubLogo from "../ui/GitHubLogo";

const ProjectsButton = ({
  githubLink,
  link,
}: {
  githubLink?: string;
  link?: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      {/* Live Demo Link */}
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Live Site"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <Globe size={18} strokeWidth={2} />
        </Link>
      )}

      {/* GitHub Repository Link */}
      {githubLink && (
        <Link
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub Repository"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-all hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          <GitHubLogo size={18} />
        </Link>
      )}
    </div>
  );
};

export default ProjectsButton;
