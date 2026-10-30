"use client";

import React from "react";

/**
 * WalkingMummy
 * A cartoon mummy that walks from the left edge of its parent div to the
 * right edge, leaves the frame, and starts again from the left (infinite loop).
 *
 * It fills the width of whatever div you put it in, so the walk distance
 * always matches the container, even when the container is resized.
 *
 * Usage:
 *   import WalkingMummy from "@/components/WalkingMummy";
 *
 *   <div style={{ width: "100%" }}>
 *     <WalkingMummy height={180} duration={14} />
 *   </div>
 *
 * Props:
 *   height   - mummy height in px (default 180)
 *   duration - seconds for one full trip across the div (default 14)
 *   facing   - "right" (default, walks forward) or "left" (original drawing)
 */

type Props = {
  height?: number;
  duration?: number;
  facing?: "left" | "right";
  className?: string;
};

const VB_X = 20;
const VB_Y = 20;
const VB_W = 700;
const VB_H = 870;

const INK = "#141414";
const GRAY = "#c9c9c9";
const CREAM = "#fffaee";

const TORSO =
  "M205 335 C200 450 168 560 158 640 C150 690 146 725 150 755 L575 755 C580 725 588 690 592 620 C600 520 592 440 572 345 Z";

const HEAD =
  "M205 340 C148 335 118 292 124 242 C128 200 150 178 188 166 C160 150 152 122 178 94 C218 50 322 30 422 38 C522 46 590 112 592 232 C594 302 586 345 575 362 Z";

export default function WalkingMummy({
  height = 180,
  duration = 14,
  facing = "right",
  className,
}: Props) {
  const width = (height * VB_W) / VB_H;

  const trackStyle = {
    height,
    "--wm-w": `${width}px`,
    "--wm-dur": `${duration}s`,
  } as React.CSSProperties;

  return (
    <div className={`wm-track ${className ?? ""}`} style={trackStyle}>
      <style>{`
        .wm-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          container-type: inline-size;
        }
        .wm-walker {
          position: absolute;
          left: 0;
          bottom: 0;
          width: var(--wm-w);
          animation: wm-cross var(--wm-dur) linear infinite;
          will-change: transform;
        }
        .wm-walker svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        /* walk from just outside the left edge to just outside the right edge */
        @keyframes wm-cross {
          from { transform: translateX(calc(var(--wm-w) * -1)); }
          to   { transform: translateX(100cqw); }
        }

        /* body bob: one bounce per step */
        .wm-bob { animation: wm-bob 0.5s ease-in-out infinite; }
        @keyframes wm-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }

        .wm-sway {
          transform-origin: 370px 780px;
          animation: wm-sway 1s ease-in-out infinite;
        }
        @keyframes wm-sway {
          0%, 100% { transform: rotate(-1.6deg); }
          50%      { transform: rotate(1.6deg); }
        }

        /* legs: swing back and forth, lifting while they pass through */
        .wm-leg-a { transform-origin: 200px 745px; animation: wm-leg 1s ease-in-out infinite; }
        .wm-leg-b { transform-origin: 510px 765px; animation: wm-leg 1s ease-in-out infinite; animation-delay: -0.5s; }
        @keyframes wm-leg {
          0%   { transform: rotate(-18deg) translateY(0); }
          25%  { transform: rotate(0deg) translateY(-10px); }
          50%  { transform: rotate(18deg) translateY(0); }
          75%  { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(-18deg) translateY(0); }
        }

        /* arms swing opposite to each other */
        .wm-arm-a { transform-origin: 195px 420px; animation: wm-arm 1s ease-in-out infinite; }
        .wm-arm-b { transform-origin: 340px 480px; animation: wm-arm 1s ease-in-out infinite; animation-delay: -0.5s; }
        @keyframes wm-arm {
          0%, 100% { transform: rotate(-9deg); }
          50%      { transform: rotate(9deg); }
        }

        /* loose bandage ends flutter */
        .wm-tail { transform-origin: 585px 650px; animation: wm-tail 1s ease-in-out infinite; }
        @keyframes wm-tail {
          0%, 100% { transform: rotate(-7deg); }
          50%      { transform: rotate(9deg); }
        }
        .wm-flap { transform-origin: 585px 400px; animation: wm-flap 0.5s ease-in-out infinite; }
        @keyframes wm-flap {
          0%, 100% { transform: rotate(-5deg); }
          50%      { transform: rotate(6deg); }
        }

        .wm-shadow {
          transform-origin: 370px 862px;
          animation: wm-shadow 0.5s ease-in-out infinite;
        }
        @keyframes wm-shadow {
          0%, 100% { transform: scaleX(1); opacity: 0.18; }
          50%      { transform: scaleX(0.92); opacity: 0.12; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wm-walker, .wm-bob, .wm-sway, .wm-leg-a, .wm-leg-b,
          .wm-arm-a, .wm-arm-b, .wm-tail, .wm-flap, .wm-shadow {
            animation: none;
          }
          .wm-walker { transform: translateX(calc(50cqw - var(--wm-w) / 2)); }
        }
      `}</style>

      <div className="wm-walker">
        <svg
          viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Cartoon mummy walking"
          style={{ transform: facing === "right" ? "scaleX(-1)" : undefined }}
        >
          <defs>
            <clipPath id="wm-clip-torso">
              <path d={TORSO} />
            </clipPath>
            <clipPath id="wm-clip-head">
              <path d={HEAD} />
            </clipPath>
          </defs>

          {/* ground shadow */}
          <ellipse
            className="wm-shadow"
            cx="370"
            cy="862"
            rx="230"
            ry="14"
            fill="#000"
          />

          <g
            stroke={INK}
            strokeWidth="10"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            {/* ---------- legs (behind the body) ---------- */}
            <g className="wm-leg-a">
              <path d="M152 740 L252 740 L246 820 L152 820 Z" fill={GRAY} />
              <path d="M150 748 L250 740 L248 785 L150 795 Z" fill={CREAM} />
              <path
                d="M112 822 C110 795 160 800 205 806 L248 812 C250 840 205 850 150 850 C125 850 113 842 112 822 Z"
                fill={INK}
              />
            </g>
            <g className="wm-leg-b">
              <path d="M448 760 L575 760 L572 830 L452 830 Z" fill={GRAY} />
              <path d="M446 768 L576 758 L574 800 L448 808 Z" fill={CREAM} />
              <path
                d="M440 836 C440 815 480 815 520 818 L552 822 C556 845 520 858 470 858 C450 858 440 850 440 836 Z"
                fill={INK}
              />
              <path
                d="M480 824 L540 826 L536 842 L480 842 Z"
                fill={CREAM}
                stroke="none"
              />
            </g>

            {/* ---------- upper body (bobs + sways) ---------- */}
            <g className="wm-bob">
              <g className="wm-sway">
                {/* loose bandage tail at the back */}
                <g className="wm-tail">
                  <path
                    d="M585 650 C602 705 640 765 692 805 C715 822 705 850 680 846 C640 838 615 795 598 745 C588 715 578 690 572 665 Z"
                    fill={CREAM}
                  />
                </g>
                {/* bandage flap hanging from the shoulder */}
                <g className="wm-flap">
                  <path
                    d="M583 385 L612 445 L688 505 L668 545 L640 538 L596 485 L582 430 Z"
                    fill={CREAM}
                  />
                </g>

                {/* torso */}
                <path d={TORSO} fill={GRAY} stroke="none" />
                <g clipPath="url(#wm-clip-torso)">
                  <path
                    d="M190 380 L590 318 L590 418 L190 448 Z"
                    fill={CREAM}
                  />
                  <path
                    d="M140 478 L440 548 L440 604 L140 548 Z"
                    fill={CREAM}
                  />
                  <path
                    d="M440 545 L610 545 L610 608 L440 600 Z"
                    fill={CREAM}
                  />
                  <path
                    d="M140 655 L610 745 L610 805 L140 725 Z"
                    fill={CREAM}
                  />
                  <path d="M140 588 C300 600 450 640 610 662" fill="none" />
                  <path d="M140 505 C250 470 330 470 420 520" fill="none" />
                </g>
                <path d={TORSO} fill="none" strokeWidth="13" />

                {/* head */}
                <path d={HEAD} fill={GRAY} stroke="none" />
                <g clipPath="url(#wm-clip-head)">
                  <path
                    d="M140 118 L610 202 L610 268 L140 182 Z"
                    fill={CREAM}
                  />
                  <path d="M215 72 C320 55 430 62 520 100" fill="none" />
                  <path d="M420 328 C470 300 540 295 595 285" fill="none" />
                  <path d="M410 238 C470 262 540 285 595 300" fill="none" />
                </g>
                {/* face */}
                <path
                  d="M124 242 C126 215 150 195 188 190 L405 230 L412 325 L205 338 C150 333 118 292 124 242 Z"
                  fill="#ffffff"
                />
                <path d={HEAD} fill="none" strokeWidth="13" />
                {/* eyes + mouth */}
                <circle cx="188" cy="252" r="18" fill={INK} stroke="none" />
                <circle cx="388" cy="272" r="18" fill={INK} stroke="none" />
                <path d="M214 312 L410 326" strokeWidth="11" />

                {/* back arm (left of the picture, raised) */}
                <g className="wm-arm-a">
                  <path
                    d="M200 395 C165 385 105 395 62 440 C40 465 42 500 60 520 L120 500 C150 490 185 480 205 470 Z"
                    fill={GRAY}
                  />
                  <path d="M140 400 C160 425 160 470 140 490" fill="none" />
                  <path
                    d="M58 462 C40 495 50 535 95 540 C125 542 135 515 128 488 C110 470 80 458 58 462 Z"
                    fill={CREAM}
                  />
                </g>

                {/* front arm (centre, fist forward) */}
                <g className="wm-arm-b">
                  <path
                    d="M322 482 C355 448 420 448 470 475 L500 500 C450 520 390 520 335 518 Z"
                    fill={CREAM}
                  />
                  <path
                    d="M300 545 C300 505 345 495 390 505 C420 515 430 545 410 570 C390 590 340 590 315 575 C303 568 300 556 300 545 Z"
                    fill={GRAY}
                  />
                  <path d="M345 502 C360 522 360 552 345 585" fill="none" />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
