"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import type { Projects } from "@/constants/project";
import { projects as defaultProjects } from "@/constants/project";
import { SectionHeading } from "./section-heading";

export default function Projects({
  projects = defaultProjects,
}: {
  projects: Projects[];
}) {
  return (
    <div className="shadow-section-inset my-10 border-y border-neutral-100 px-4 py-4 ">
      <SectionHeading delay={0.2}>Thing i have made</SectionHeading>
      <div className="grid grid-cols-1 gap-2 py-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            key={project.title}
            className="group relative mb-2"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="h-full max-h-40 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-1 mb-1 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                {project.title}
              </h2>
              <p className="max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
