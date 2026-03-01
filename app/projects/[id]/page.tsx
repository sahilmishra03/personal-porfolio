import { notFound } from "next/navigation";

import ProjectDetailPageUI from "@/components/Projects/ProjectDetailPageUI";
import projectsData from "@/data/projects.json";
import { ProjectType } from "@/types/project";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projects = projectsData as ProjectType[];
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const projects = projectsData as ProjectType[];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title || project.name} - Portfolio`,
    description:
      project.shortDescription || project.description || project.excerpt,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const projects = projectsData as ProjectType[];
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPageUI project={project} />;
}
