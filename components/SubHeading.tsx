"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function SubHeading({
  as: Tag = "h2",
  children,
  className,
}: {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(5px)",
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.3,
      }}
    >
      <Tag
        className={cn(
          "text-secondary md:text-md max-w-2xl px-4 pt-4 text-lg tracking-wider",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
