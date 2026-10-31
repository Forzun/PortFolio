"use client";

import { useEffect, useState } from "react";

export default function SeasonalEffects() {
  const [season, setSeason] = useState<string | null>(null);

  useEffect(() => {
    setSeason(document.documentElement.dataset.season ?? "default");
    const el = document.getElementById("torch");
    const move = (e: MouseEvent) => {
      el?.style.setProperty("--mx", `${e.clientX}px`);
      el?.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (season === "halloween") {
    return (
      <>
        <div className="halloween-fog" />
        <div className="halloween-embers">
          {[8, 22, 35, 50, 64, 78, 90].map((x, i) => (
            <span
              key={i}
              style={
                {
                  "--x": `${x}%`,
                  "--d": `${8 + (i % 4) * 2}s`,
                  "--delay": `${-i * 1.3}s`,
                  "--s": `${3 + (i % 3) * 2}px`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div
          className="halloween-bat"
          style={{ "--y": "12%", "--t": "16s" } as React.CSSProperties}
        />
        <div
          className="halloween-bat"
          style={
            {
              "--y": "28%",
              "--t": "22s",
              "--delay": "-8s",
              "--w": "34px",
            } as React.CSSProperties
          }
        />
        <div className="halloween-torch" id="torch" />
      </>
    );
  }

  if (season === "christmas") {
    return <div className="christmas-snow" aria-hidden="true" />;
  }

  return null;
}
