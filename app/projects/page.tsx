import { Metadata } from "next";

import Projects from "@/components/Projects/Projects";

export const metadata: Metadata = {
  title: "Projects - Portfolio",
  description:
    "Explore my portfolio of projects including web development, mobile apps, and more.",
};

export default function ProjectsPage() {
  return <Projects />;
}
