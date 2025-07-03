"use client";
import { HTMLMotionProps, motion } from "motion/react";
import React from "react";

interface MotionDivProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
}

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  },
);
