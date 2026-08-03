import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "../ui/avatar";
import { SocialMedia, SocialMediaProps } from "@/constants/socialCover";
import Image from "next/image";

export default function ProfileCover() {
  return (
    <div className="container mx-auto mt-20 mb-10 flex flex-col sm:flex-row md:mt-12">
      <div className="flex h-full max-h-52 w-full max-w-52 flex-shrink-0 items-center justify-center sm:border-[1px] sm:border-neutral-200/60 sm:dark:border-neutral-800/60">
        <div className="relative flex h-full w-full items-center justify-center rounded-full border-[1px] border-neutral-300 p-[1px] dark:border-neutral-700">
          <Avatar className="h-full w-full">
            <AvatarImage
              className="imag object-cover"
              src={`/logo/forzun.avif`}
            />
          </Avatar>

          {/* Green pulsing dot */}
          {/* <span className="absolute bottom-1 right-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span> */}
        </div>
      </div>

      <div className="relative flex w-full justify-end border-y-[1px] border-neutral-200/60 dark:border-neutral-800/60">
        <div className=" absolute inset-0 z-0 h-full w-full bg-white dark:bg-black"></div>
        <div className="relative flex w-full max-w-[50%] px-1 py-1">
          <div
            className="grid w-full grid-cols-6 gap-1 text-neutral-500"
            dir="rtl"
          >
            {SocialMedia.map((media: SocialMediaProps, index) => {
              const colSpanMap: Record<number, string> = {
                1: "col-span-1",
                2: "col-span-2",
                3: "col-span-3",
                4: "col-span-4",
                5: "col-span-5",
                6: "col-span-6",
              };
              return typeof media.icons === "string" ? (
                <div
                  className={cn`${colSpanMap[media.width] || "col-span-1"} overflow-hidden rounded-md flex items-center justify-center`}
                  key={index}
                >
                  <Image
                    src={media.icons}
                    alt={media.label}
                    width={48}
                    height={48}
                    className="h-12 w-full object-cover rounded"
                  />
                </div>
              ) : (
                <button
                  className={`${colSpanMap[media.width] || "col-span-1"} inline-flex h-12 items-center justify-end gap-2 rounded-md border border-neutral-200/80 bg-black/2 px-2 inset-shadow-xs dark:border-neutral-700/80`}
                  key={index}
                >
                  <span className="text-md text-neutral-600/60 dark:text-neutral-100/90">{media.label }</span>
                  <media.icons className="size-5 text-neutral-800/90 dark:text-neutral-100/90" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
