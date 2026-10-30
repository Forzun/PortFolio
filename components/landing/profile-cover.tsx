"use client";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useSound } from "@web-kits/audio/react";
import { useRef, type ComponentType } from "react";
import PixelPumpkin from "../season/pumkin";
import WalkingMummy from "../season/Walkingmummy";
import WalkingVampire from "../characters/Walkingvampire";

const PUMPKIN_SIZE = 100;
const PUMPKIN_ROTATION = 20;

const walkingCharacters = [
  { character: WalkingMummy, duration: 14, height: 70 },
  { character: WalkingVampire, duration: 19, height: 70 },
];

type WalkingCharacterProps = {
  Component: ComponentType<{
    height?: number;
    duration?: number;
    className?: string;
  }>;
  height: number;
  duration: number;
  onShake: () => void;
};

function WalkingCharacter({
  Component,
  height,
  duration,
  onShake,
}: WalkingCharacterProps) {
  const [scope, animate] = useAnimate();

  const handleShake = () => {
    onShake();
    animate(
      scope.current,
      {
        x: [0, -12, 12, -9, 9, 0],
        y: [0, -8, 0, -4, 0, 0],
        rotate: [0, -5, 5, -3, 3, 0],
      },
      { duration: 0.6, ease: "easeInOut" },
    );
  };

  return (
    <motion.div
      ref={scope}
      onClick={handleShake}
      className="pointer-events-none absolute inset-0"
      style={{ transformOrigin: "bottom center" }}
    >
      <Component
        height={height}
        duration={duration}
        className="pointer-events-none [&_.wm-walker]:pointer-events-auto [&_.wm-walker]:cursor-pointer [&_.wv-walker]:pointer-events-auto [&_.wv-walker]:cursor-pointer"
      />
    </motion.div>
  );
}

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
      <div className="relative ml-5 flex h-full w-full">
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
        <div
          style={{ width: "97.8%" }}
          className="absolute bottom-0"
        >
          <div className="relative h-[70px]">
            {walkingCharacters.map((character) => (
              <WalkingCharacter
                key={character.character.name}
                Component={character.character}
                height={character.height}
                duration={character.duration}
                onShake={playPop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
