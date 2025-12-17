"use client";
import Image from "next/image";
import Container from "../container";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useLayoutEffect, useState } from "react";
import { Link } from "next-view-transitions";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    Width: 0,
    height: 0,
  });

  // useLayoutEffect is preferred for measuring DOM elements
  // as it runs synchronously after all DOM mutations
  // but before the browser paints.
  // useEffect can also be used, but might cause a flicker
  // if the layout depends on the size.
  useLayoutEffect(() => {
    function handleResize() {
      setWindowSize({
        Width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return windowSize;
}

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

  const { Width } = useWindowSize();

  console.log(Width);
  let squiz = "43";

  if (600 > Width) {
    squiz = "70";
  } else {
    squiz = "43";
  }

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], [`${squiz}%`, "39%"]);

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
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-center rounded-full bg-white p-2 md:justify-between dark:bg-neutral-900"
      >
        <Link className="hidden md:block" href="/">
          <Image
            className="h-11 w-11 rounded-full"
            src="/winter.jpg"
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
