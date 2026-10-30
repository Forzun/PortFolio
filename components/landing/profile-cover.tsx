"use client";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useSound } from "@web-kits/audio/react";
import { useRef } from "react";
import PixelPumpkin from "../season/pumkin";

const PUMPKIN_SIZE = 100;
const PUMPKIN_ROTATION = 20;

export default function ProfileCover() {
  const [pumpkinScope, animatePumpkin] = useAnimate();
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playPop = useSound({
    source: { type: "sine", frequency: 881 },
    envelope: { decay: 0.1 },
    gain: 0.3,
  });

  const shakePumpkin = () => {
    playPop();
    animatePumpkin(
      pumpkinScope.current,
      { rotate: [0, -12, 12, -10, 10, -6, 6, 0] },
      { duration: 0.5, ease: "easeInOut" },
    );
  };

  const handleClick = () => {
    if (clickTimer.current) return;
    clickTimer.current = setTimeout(() => {
      clickTimer.current = null;
      shakePumpkin();
    }, 200);
  };

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    shakePumpkin();
  };

  return (
    <div className="container mx-auto mt-20 mb-4 md:mt-12">
      <div className="ml-5 flex h-full w-full">
        <div className="relative mr-5">
          <div
            className="zoom-container profile-avatar group relative flex h-35 w-35 items-center justify-center overflow-hidden rounded-3xl bg-neutral-400/20"
            onDoubleClick={handleDoubleClick}
          >
            <Image
              className="h-full w-full scale-110 rounded-4xl border border-neutral-200/80 bg-black/2 object-cover p-2 inset-shadow-xs transition-transform duration-300"
              src={`/logo/forzun.avif`}
              alt="Profile"
              fill
              priority
            />
          </div>
          <div
            className="absolute bottom-0 -left-6 z-[100]"
            style={{ transform: `rotate(${PUMPKIN_ROTATION}deg)` }}
          >
            <motion.div
              ref={pumpkinScope}
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
            >
              <PixelPumpkin className="-rotate-20" size={60} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
