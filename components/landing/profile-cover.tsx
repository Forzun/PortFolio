"use client";
import { cn } from "@/lib/utils";
import { SocialMedia, SocialMediaProps } from "@/constants/socialCover";
import Image from "next/image";
import Link from "next/link";

export default function ProfileCover() {
  const colSpanMap: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
  };

  return (
    <div className="container mx-auto mt-20 mb-10 flex flex-col sm:flex-row md:mt-12">
      <div className="ml-5 flex h-full w-full justify-start">
        <div className="zoom-container relative mr-5 flex h-35 w-35 items-center justify-center overflow-hidden rounded-3xl bg-neutral-400/20">
          <Image
            className="h-full w-full scale-110 rounded-4xl border border-neutral-200/80 bg-black/2 object-cover p-2 inset-shadow-xs transition-transform duration-300"
            src={`/logo/forzun.avif`}
            alt="Profile"
            fill
            priority
          />
        </div>
        {/* <div className= "text-neutral-499 text-xl  h-full mt-5 ">
          <motion.span>{"Bhavesh_Mandawriay".split("").map((char, index) => {
            return <motion.span 
              initial={{ 
                opacity: 1,
                y: 11,
                filter: "blur(11px)"
              }}
              animate={{
                opacity: 2,
                y: 1,
                filter: "blur(1px)"
              }}
              transition={{
                duration: 1.5,
                delay: index * 1.1,
                ease: "easeInOut"
              }}
              className="inline-block"
            key={index}>{char}</motion.span>
          })}</motion.span>
        </div> */}
      </div>

      <div className="relative flex w-full justify-end dark:border-neutral-800/60">
        <div className="absolute inset-0 z-0 h-full w-full bg-white dark:bg-black"></div>
        <div className="relative flex w-full max-w-[75%] px-1 py-1">
          <div
            className="grid w-full grid-cols-6 gap-1 text-neutral-500"
            dir="rtl"
          >
            {SocialMedia.map((media: SocialMediaProps, index) => {
              return typeof media.icons === "string" ? (
                <div
                  className={cn(
                    `${colSpanMap[media.width] || "col-span-1"} flex items-center justify-center overflow-hidden rounded-md`,
                  )}
                  key={index}
                >
                  <Image
                    src={media.icons}
                    alt={media.label}
                    width={48}
                    height={48}
                    className="h-11 w-full rounded object-cover"
                  />
                </div>
              ) : (
                <Link
                  className={cn(
                    colSpanMap[media.width] || "col-span-1",
                    "group inline-flex h-11 items-center justify-end gap-2 rounded-md border border-neutral-200/80 bg-black/2 px-2 inset-shadow-xs transition-colors duration-200 dark:border-neutral-700/80",
                    media.hover &&
                      "hover:border-neutral-400 hover:bg-black/5 dark:hover:border-neutral-500 dark:hover:bg-white/5",
                  )}
                  key={index}
                  href={media.href}
                >
                  <span
                    className={cn(
                      "text-md text-neutral-600/60 transition-colors duration-200 dark:text-neutral-400",
                      media.hover &&
                        "group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                    )}
                  >
                    {media.label}
                  </span>
                  <media.icons
                    className={cn(
                      "size-5 text-neutral-600/70 transition-colors duration-200 dark:text-neutral-400 [&_path]:fill-current",
                      media.hover &&
                        "group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
