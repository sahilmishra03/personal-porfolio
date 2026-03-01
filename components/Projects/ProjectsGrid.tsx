"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { ProjectType } from "@/types/project";

import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectType[];
  initialCount?: number;
}

const ProjectsGrid = ({ projects, initialCount = 4 }: ProjectsGridProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);
  const hasMore = projects.length > initialCount;

  return (
    <div className="w-full">
      {/* Grid Container */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay:
                  showAll && index >= initialCount
                    ? (index - initialCount) * 0.1
                    : 0,
                ease: "easeOut",
              }}
              className="h-full"
            >
              <ProjectCard project={project} projectIndex={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Show More/Less Button */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-sm active:scale-95 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
          >
            {showAll ? (
              <>
                Show Less
                <ChevronUp
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
              </>
            ) : (
              <>
                Show More ({projects.length - initialCount} more)
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
