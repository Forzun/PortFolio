"use client";

import { useInView, motion, easeInOut } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: [
    {
      title: string;
      description?: string | React.ReactNode;
    },
  ];
};

export default function TimeLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  const data: Data[] = [
    {
      title: "2025",
      content: [
        {
          title:
            "Working at a startup as a full-stack developer while juggling side projects",
          description:
            "Trying to learn something new every day. I love solving problems (as long as theyre within my power) and building cool stuff that sometimes even works!",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title:
            "Started diving deep into backend and officially joined the MERN cult",
          description:
            "This year, I fell deeper in love with tech. Enjoying the grind before final year panic kicks in.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "BCA begins: No clue what tech is, but here we go",
          description:
            "Started with C, found peace in C++, and tried every tech trend under the sun. Fell for frontend... hard.",
        },
      ],
    },
    {
      title: "2005",
      content: [
        {
          title:
            "A wild developer was born — second software engineer in the family",
          description:
            "Didnt know it yet, but semicolons and sleepless nights were in the destiny.",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="py-10">
      {data.map((year, index) => (
        <div className="mb-4" key={index}>
          <motion.h2
            className="shadow-custom mb-2 w-fit rounded-md px-4 py-0.5 font-bold text-black"
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
            }}
            transition={{
              duration: 0.3,
              ease: easeInOut,
              delay: 0.1 * index,
            }}
          >
            {year.title}
          </motion.h2>

          <div className="flex flex-col gap-10">
            {year.content.map((item, index) => (
              <div className="pl-4" key={index}>
                <Step isInView={isInView} index={index}>
                  <motion.h3
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * index,
                    }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </Step>
                {item.description && (
                  <motion.p
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: easeInOut,
                      delay: 0.3 * index,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-400"
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const Step = ({
  className,
  children,
  isInView,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  isInView: boolean;
  index: number;
}) => {
  return (
    <motion.div
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 0.2 * index,
      }}
    >
      <div className={cn("flex items-center gap-2", className)}>
        <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500" />
        {children}
      </div>
    </motion.div>
  );
};
