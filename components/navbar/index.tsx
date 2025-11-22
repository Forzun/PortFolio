"use client";
import Image from "next/image";
import Container from "../container";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { Link } from "next-view-transitions";

export default function Navbar() {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["43%", "39%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width,
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white p-2 dark:bg-neutral-900"
      >
        <Link href="/">
          <Image
            className="h-11 w-11 rounded-full"
            src="/home.jpg"
            height="100"
            width="100"
            alt="Avatar"
          />
        </Link>

        <div className="flex items-center">
          {navItems.map((item, index) => (
            <Link
              className="relative px-2 py-2 text-sm"
              key={index}
              href={item.href}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === index && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
}
