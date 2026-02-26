import Link from "next/link";
import { ArrowDown } from "lucide-react";

import ProjectsGrid from "./ProjectsGrid";

export type ProjectType = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  status: string;
  link: string;
  githubLink: string;
};

// I've left the placeholder projects intact here. 
// You can replace these with your actual projects (like BullXchange or OpenForge) when you're ready!
export const projects: ProjectType[] = [
  {
    id: "rainbow-app",
    name: "Rainbow App",
    tagline: "Colorful Digital Experience",
    description:
      "A vibrant multi-platform application that brings colors to life through interactive animations and user-friendly interfaces. Features real-time color mixing, palette generation, and collaborative design tools.",
    image: "https://picsum.photos/500/300?random=1",
    tech: ["React", "Node.js", "MongoDB", "Canvas API", "WebGL"],
    status: "All Systems Operational",
    link: "https://example.com/rainbow-app",
    githubLink: "https://github.com/sahilmishra/rainbow-app",
  },
  {
    id: "neural-paint",
    name: "Neural Paint",
    tagline: "AI-Powered Art Generator",
    description:
      "An innovative artificial intelligence platform that transforms text prompts into stunning visual artwork. Utilizes advanced machine learning models to create unique, high-quality images in various artistic styles.",
    image: "https://picsum.photos/500/300?random=2",
    tech: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    status: "In Development",
    link: "https://example.com/neural-paint",
    githubLink: "https://github.com/sahilmishra/neural-paint",
  },
];

const Projects = () => {
  return (
    // Fixed invalid mt-15 to standard responsive spacing
    <section id="projects" className="mx-auto mt-12 max-w-3xl px-0 sm:mt-16">
      
      <div className="mb-6 flex items-end justify-between sm:mb-8">
        
        {/* Styled header to exactly match your AboutMe section */}
        <div>
          <h2 className="text-sm font-bold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Featured
          </h2>
          <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Projects
          </p>
        </div>
        
      </div>

      {/* Grid Component */}
      <ProjectsGrid projects={projects} initialCount={4} />

      {/* Show All Projects Button */}
      <div className="mt-12 flex justify-center">
        <button
          className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-600 transition-all hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-900 hover:shadow-sm active:scale-95 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          Show All Projects
          <ArrowDown
            size={16}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
        </button>
      </div>

    </section>
  );
};

export default Projects;