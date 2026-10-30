"use client";

import React from "react";

/**
 * WalkingVampire
 * A cartoon vampire that walks from the left edge of its parent div to the
 * right edge, leaves the frame, and starts again from the left (infinite loop).
 *
 * It fills the width of whatever div you put it in, so the walk distance
 * always matches the container, even when the container is resized.
 *
 * Usage:
 *   import WalkingVampire from "@/components/WalkingVampire";
 *
 *   <div style={{ width: "100%" }}>
 *     <WalkingVampire height={180} duration={14} />
 *   </div>
 *
 * Props:
 *   height   - vampire height in px (default 180)
 *   duration - seconds for one full trip across the div (default 14)
 *   facing   - "right" (default, walks forward) or "left" (mirrored)
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
const VB_H = 790;

const INK = "#141414";
const WHITE = "#ffffff";
const RED = "#ee3744";
const CAPE = "#383838";

// head + neck + body as one white silhouette
const SILHOUETTE =
  "M165 262 C158 150 215 62 335 45 C425 33 520 48 572 92 C598 114 604 148 594 178 L586 205 C576 222 560 236 538 248 L518 262 L514 340 C545 360 568 400 575 470 L577 700 L204 700 L205 470 C212 400 235 360 262 340 L262 290 C230 280 190 272 165 262 Z";

export default function WalkingVampire({
  height = 180,
  duration = 14,
  facing = "right",
  className,
}: Props) {
  const width = (height * VB_W) / VB_H;

  const trackStyle = {
    height,
    "--wv-w": `${width}px`,
    "--wv-dur": `${duration}s`,
  } as React.CSSProperties;

  return (
    <div className={`wv-track ${className ?? ""}`} style={trackStyle}>
      <style>{`
        .wv-track {
          position: relative;
          width: 100%;
          overflow: hidden;
          container-type: inline-size;
        }
        .wv-walker {
          position: absolute;
          left: 0;
          bottom: 0;
          width: var(--wv-w);
          animation: wv-cross var(--wv-dur) linear infinite;
          will-change: transform;
        }
        .wv-walker svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        /* walk from just outside the left edge to just outside the right edge */
        @keyframes wv-cross {
          from { transform: translateX(calc(var(--wv-w) * -1)); }
          to   { transform: translateX(100cqw); }
        }

        /* body bob: one bounce per step */
        .wv-bob { animation: wv-bob 0.5s ease-in-out infinite; }
        @keyframes wv-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-9px); }
        }

        .wv-sway {
          transform-origin: 390px 700px;
          animation: wv-sway 1s ease-in-out infinite;
        }
        @keyframes wv-sway {
          0%, 100% { transform: rotate(-1.6deg); }
          50%      { transform: rotate(1.6deg); }
        }

        /* little nod of the head with each step */
        .wv-head {
          transform-origin: 390px 330px;
          animation: wv-nod 0.5s ease-in-out infinite;
        }
        @keyframes wv-nod {
          0%, 100% { transform: rotate(-1.5deg); }
          50%      { transform: rotate(1.5deg); }
        }

        /* legs: swing back and forth, lifting while they pass through */
        .wv-leg-a { transform-origin: 245px 700px; animation: wv-leg 1s ease-in-out infinite; }
        .wv-leg-b { transform-origin: 525px 700px; animation: wv-leg 1s ease-in-out infinite; animation-delay: -0.5s; }
        @keyframes wv-leg {
          0%   { transform: rotate(-18deg) translateY(0); }
          25%  { transform: rotate(0deg) translateY(-10px); }
          50%  { transform: rotate(18deg) translateY(0); }
          75%  { transform: rotate(0deg) translateY(0); }
          100% { transform: rotate(-18deg) translateY(0); }
        }

        /* arms swing opposite to each other */
        .wv-arm-a { transform-origin: 240px 440px; animation: wv-arm 1s ease-in-out infinite; }
        .wv-arm-b { transform-origin: 540px 440px; animation: wv-arm 1s ease-in-out infinite; animation-delay: -0.5s; }
        @keyframes wv-arm {
          0%, 100% { transform: rotate(-10deg); }
          50%      { transform: rotate(10deg); }
        }

        /* cape wings flutter behind him */
        .wv-cape-a { transform-origin: 150px 270px; animation: wv-flutter-a 1s ease-in-out infinite; }
        .wv-cape-b { transform-origin: 590px 270px; animation: wv-flutter-b 1s ease-in-out infinite; }
        @keyframes wv-flutter-a {
          0%, 100% { transform: rotate(-3deg); }
          50%      { transform: rotate(6deg); }
        }
        @keyframes wv-flutter-b {
          0%, 100% { transform: rotate(3deg); }
          50%      { transform: rotate(-4deg); }
        }

        .wv-shadow {
          transform-origin: 390px 782px;
          animation: wv-shadow 0.5s ease-in-out infinite;
        }
        @keyframes wv-shadow {
          0%, 100% { transform: scaleX(1); opacity: 0.18; }
          50%      { transform: scaleX(0.92); opacity: 0.12; }
        }

        @media (prefers-reduced-motion: reduce) {
          .wv-walker, .wv-bob, .wv-sway, .wv-head, .wv-leg-a, .wv-leg-b,
          .wv-arm-a, .wv-arm-b, .wv-cape-a, .wv-cape-b, .wv-shadow {
            animation: none;
          }
          .wv-walker { transform: translateX(calc(50cqw - var(--wv-w) / 2)); }
        }
      `}</style>

      <div className="wv-walker">
        <svg
          viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Cartoon vampire walking"
          style={{ transform: facing === "left" ? "scaleX(-1)" : undefined }}
        >
          {/* ground shadow */}
          <ellipse
            className="wv-shadow"
            cx="390"
            cy="782"
            rx="240"
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
            <g className="wv-leg-a">
              <path d="M208 692 L285 692 L282 738 L210 738 Z" fill={WHITE} />
              <path
                d="M185 740 C185 720 215 716 250 720 L292 726 C297 754 270 778 225 778 C195 778 185 762 185 740 Z"
                fill={INK}
              />
            </g>
            <g className="wv-leg-b">
              <path d="M490 692 L570 692 L566 738 L492 738 Z" fill={WHITE} />
              <path
                d="M466 742 C466 722 500 718 535 722 L575 728 C580 756 553 780 508 780 C480 780 466 764 466 742 Z"
                fill={INK}
              />
            </g>

            {/* ---------- upper body (bobs + sways) ---------- */}
            <g className="wv-bob">
              <g className="wv-sway">
                {/* red collars, behind the head */}
                <path
                  d="M68 235 C100 215 140 205 165 205 L170 268 L100 252 Z"
                  fill={RED}
                />
                <path
                  d="M642 235 C612 215 590 205 570 205 L568 268 L632 252 Z"
                  fill={RED}
                />

                {/* head + neck + body */}
                <path d={SILHOUETTE} fill={WHITE} strokeWidth="12" />

                {/* cape wing, left (trailing) */}
                <g className="wv-cape-a">
                  <path
                    d="M100 250 L168 268 L262 345 L262 358 L215 362 C220 430 214 500 208 560 L205 655 C150 675 90 695 45 690 C55 560 80 400 100 250 Z"
                    fill={CAPE}
                  />
                  <path
                    d="M208 480 C200 540 170 610 120 650 L75 685 C125 682 170 670 205 655 Z"
                    fill={RED}
                  />
                  <path d="M105 342 L262 352" fill="none" />
                </g>

                {/* cape wing, right */}
                <g className="wv-cape-b">
                  <path
                    d="M632 250 L568 268 L512 345 L512 358 L560 362 C556 430 562 500 568 560 L570 655 C625 672 665 690 698 688 C690 560 662 400 632 250 Z"
                    fill={CAPE}
                  />
                  <path
                    d="M566 480 C572 540 600 610 650 650 L690 684 C640 682 600 670 570 655 Z"
                    fill={RED}
                  />
                  <path d="M635 342 L512 352" fill="none" />
                </g>

                {/* face (nods a little with each step) */}
                <g className="wv-head">
                  <circle cx="352" cy="160" r="19" fill={INK} stroke="none" />
                  <circle cx="546" cy="120" r="19" fill={INK} stroke="none" />
                  <path
                    d="M388 214 L424 209 L407 246 Z"
                    fill={WHITE}
                    strokeWidth="8"
                  />
                  <path
                    d="M500 200 L532 196 L516 230 Z"
                    fill={WHITE}
                    strokeWidth="8"
                  />
                  <path d="M335 208 L578 180" strokeWidth="13" />
                </g>

                {/* bow tie */}
                <path
                  d="M312 318 C340 322 372 336 388 342 L388 358 C372 366 340 380 312 392 Z"
                  fill={RED}
                />
                <path
                  d="M494 318 C466 322 432 336 416 342 L416 358 C432 366 466 380 494 392 Z"
                  fill={RED}
                />
                <rect
                  x="386"
                  y="336"
                  width="32"
                  height="30"
                  rx="5"
                  fill={RED}
                />

                {/* cape clasps */}
                <circle cx="268" cy="352" r="11" fill={RED} />
                <circle cx="510" cy="352" r="11" fill={RED} />

                {/* arms */}
                <g className="wv-arm-a">
                  <path
                    d="M222 448 C240 420 288 418 318 436 C326 446 318 460 298 462 C275 464 245 470 224 484 Z"
                    fill={INK}
                  />
                </g>
                <g className="wv-arm-b">
                  <path
                    d="M556 448 C538 420 490 418 460 436 C452 446 460 460 480 462 C503 464 533 470 554 484 Z"
                    fill={INK}
                  />
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
