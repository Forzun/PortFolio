"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const SectionHeading = ({
  children,
  className,
  delay,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <h2
      className={cn(
        "max-w-lg w-full pt-4 text-sm text-neutral-800 md:text-sm",
        className,
      )}
    >
      {children.split(" ").map((word, index) => ( 
        <motion.span
          initial={{
            opacity: 0,
            y: 5,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.05,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={index}
          className="mr-1 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};
