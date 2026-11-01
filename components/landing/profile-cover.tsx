"use client";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useSound } from "@web-kits/audio/react";
import { useRef, useState, type ComponentType } from "react";
import PixelPumpkin from "../season/pumkin";
import WalkingMummy from "../season/Walkingmummy";
import WalkingVampire from "../characters/Walkingvampire";

const PUMPKIN_SIZE = 60;
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
    paused?: boolean;
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
  const [isDragging, setIsDragging] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const justDragged = useRef(false);
  const shakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shake = () => {
    if (justDragged.current) return;
    onShake();
    setIsShaking(true);
    animate(
      scope.current,
      { x: [0, -4, 4, -3, 3, -2, 2, 0] },
      { duration: 0.4, ease: "easeInOut" },
    ).then(() => setIsShaking(false));
  };

  const handleClick = () => {
    if (justDragged.current || shakeTimer.current) return;
    shakeTimer.current = setTimeout(() => {
      shakeTimer.current = null;
      shake();
    }, 200);
  };

  const handleDoubleClick = () => {
    if (shakeTimer.current) {
      clearTimeout(shakeTimer.current);
      shakeTimer.current = null;
    }
    shake();
  };

  const handleDragStart = () => {
    justDragged.current = true;
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    animate(
      scope.current,
      { x: 0, y: 0 },
      { type: "spring", stiffness: 300, damping: 24 },
    ).then(() => {
      justDragged.current = false;
    });
  };

  return (
    <motion.div
      ref={scope}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      drag
      dragMomentum={false}
      dragElastic={0.15}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="pointer-events-none absolute inset-0"
      style={{ transformOrigin: "bottom center" }}
    >
      <Component
        height={height}
        duration={duration}
        paused={isDragging || isShaking}
        className="pointer-events-none [&_.wm-walker]:pointer-events-auto [&_.wm-walker]:cursor-grab [&_.wm-walker]:active:cursor-grabbing [&_.wv-walker]:pointer-events-auto [&_.wv-walker]:cursor-grab [&_.wv-walker]:active:cursor-grabbing"
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

  const playCrash = useSound({
    source: { type: "sample", url: "/sound/crash.mp3" },
    gain: 0.6,
  });

  const shakePumpkin = () => {
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
      playCrash();
      shakePumpkin();
    }, 200);
  };

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    playCrash();
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
            className="pointer-events-none absolute bottom-0 -left-6 z-[100]"
            style={{ transform: `rotate(${PUMPKIN_ROTATION}deg)` }}
          >
            <motion.div
              ref={pumpkinScope}
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              className="pointer-events-none"
            >
              <PixelPumpkin className="pointer-events-none -rotate-20 z-10" size={PUMPKIN_SIZE} />
            </motion.div>
          </div>
        </div>
        <div style={{ width: "97.8%" }} className="absolute bottom-0">
          <div className="relative h-[70px] z-9">
            {walkingCharacters.map((character) => (
              <WalkingCharacter
                key={character.character.name}
                Component={character.character}
                height={character.height}
                duration={character.duration}
                onShake={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
