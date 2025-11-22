"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const SectionHeading = ({
  children,
  className,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  return (
    <h2
      className={cn(
        "relative w-fit max-w-lg p-1 text-sm font-normal text-neutral-800 md:mb-3 md:text-sm",
        className,
      )}
    >
      <Background />
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

const Background = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0,
        ease: "easeInOut",
        delay: 1,
      }}
      className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100"
    >
      <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-400"></div>
      <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-400"></div>
      <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-400"></div>
      <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-400"></div>
    </motion.div>
  );
};
