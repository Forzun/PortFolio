"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import { useState } from "react";

type BlogsProps = {
  author?: string;
  date?: string;
  description?: string;
  image?: { href: string; alt: string };
  title?: string;
  slug: string;
};

export default function BlogItems({ blog }: { blog: BlogsProps }) {
  const [hovered, setHovered] = useState(false);
  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  const imageSrc = blog.image?.href ?? "/blog/intorductionToNextjs.png";
  const imageAlt = blog.image?.alt ?? "blog image";

  return (
    <Link
      className="group relative"
      href={`/blog/${blog.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/2 left-1/2 h-45 w-60 -translate-x-1/2 -translate-y-1/2 rounded-md border-[1px] border-neutral-950"
      >
        <Image
          fill
          src={imageSrc}
          alt={imageAlt}
          className="rounded-md object-cover"
        />
      </motion.div>
      <div className="flex items-center justify-between">
        <h2 className="text-primary font-base text-base tracking-tight">
          {blog.title}
        </h2>
        <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
          {new Date(blog.date || "").toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
        {truncate(blog.description || " ", 115)}
      </p>
    </Link>
  );
}
