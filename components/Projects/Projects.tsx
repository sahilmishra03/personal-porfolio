"use client";

import { useEffect, useState } from "react";

import LoadingSpinner from "@/components/PageTransition/LoadingSpinner";
import projectsData from "@/data/projects.json";
import { ProjectType } from "@/types/project";

import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading then show projects
    const timer = setTimeout(() => {
      setProjects(projectsData as ProjectType[]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <section id="projects" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      <div className="mb-6 flex items-end justify-between sm:mb-8">
        <div>
          <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Featured
          </h2>
          <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
            Projects
          </p>
        </div>
      </div>

      {/* Grid Component */}
      <ProjectsGrid projects={projects} initialCount={4} />
    </section>
  );
};

export default Projects;
