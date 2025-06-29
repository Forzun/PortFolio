"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "WinChat",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/faeb1c227265077.683d62f0ae46d.png",
      description:
        "A chat app that allows you to chat with your friends and fmaily ",
      href: "#",
    },
    {
      title: "MindMesh",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/070ec8227943741.6849c819c695c.png",
      description:
        "It's like second brain app that allows you to save tweet , video , iamge etc..",
      href: "#",
    },
    {
      title: "hirrd",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/faeb1c227265077.683d62f0ae46d.png",
      description:
        "It's like second brain app that allows you to save tweet , video , iamge etc..",
      href: "#",
    },
    {
      title: "MiniDraw",
      src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/d9fcdf227470273.684075f6f0591.png",
      description:
        "It's like second brain app that allows you to save tweet , video , iamge etc..",
      href: "#",
    },
  ];

  return (
    <div className="py-10">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I love building web apps and products that can impact millions of lives
      </p>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            key={project.title}
            className="group relative mb-2"
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={300}
                width={300}
                className="h-72 w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
              />
              <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
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
