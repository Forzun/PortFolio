"use client";
import Image from "next/image";

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
    <div className="container mx-auto mt-20 mb-4 md:mt-12">
      <div className="ml-5 flex h-full w-full">
        <div className="zoom-container profile-avatar group relative mr-5 flex h-35 w-35 items-center justify-center overflow-hidden rounded-3xl bg-neutral-400/20">
          <Image
            className="h-full w-full scale-110 rounded-4xl border border-neutral-200/80 bg-black/2 object-cover p-2 inset-shadow-xs transition-transform duration-300"
            src={`/logo/forzun.avif`}
            alt="Profile"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
}
