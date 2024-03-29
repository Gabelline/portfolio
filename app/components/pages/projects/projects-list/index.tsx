"use client";

import { ProjectCard } from "./project-card";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUpAnimation } from "@/app/lib/animations";
import { Project } from "@/app/types/projects";

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container py-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`}>
          <ProjectCard project={project}/>
        </Link>
      ))}
    </section>
  );
};
