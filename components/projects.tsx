"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import type { Projects } from "@/constants/project";
import { projects as defaultProjects } from "@/constants/project";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project, index }: { project: Projects; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className="group relative mb-2"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-40 w-full overflow-hidden rounded-xl">
          <Image
            src={project.src}
            alt={project.title}
            height={300}
            width={300}
            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:blur-[2px]"
          />
          <div className="absolute inset-0 z-20 bg-black/20 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center text-sm font-medium tracking-wide text-white opacity-0 drop-shadow-lg transition-opacity duration-300 group-hover:opacity-100">
            watch →
          </span>
        </div>
        <h2 className="z-20 mt-1 mb-1 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
          {project.title}
        </h2>
        <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
          {project.description.substring(0, 70) + "..."}
        </p>
      </Link>
    </motion.div>
  );
}

export default function Projects({
  projects = defaultProjects,
}: {
  projects: Projects[];
}) {
  return (
    <div className="shadow-section-inset my-1 border-y border-neutral-100 px-4 py-4">
      <SectionHeading delay={0.2}>Thing i have made</SectionHeading>
      <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

