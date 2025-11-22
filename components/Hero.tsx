"use client";

import { heroConfig } from "@/constants/skills";
import React from "react";

export default function Hero() {
  const pareseDescription = (
    template: string,
    skills: typeof heroConfig.skills,
  ) => {
    const parts = [];
    let lastIndex = 0;
    const regex = /{skills:(\d+)}/g;

    for (const match of template.matchAll(regex)) {
      const index = match.index;
      if (index === undefined) continue;

      if (index > lastIndex) {
        parts.push({
          type: "text",
          content: template.slice(lastIndex, index),
        });
      }

      const skillIndex = Number(match[1]);
      const skill = skills[skillIndex];

      if (skill) {
        parts.push({
          type: "skill",
          skill,
        });
      }

      lastIndex = index + match[0].length;
    }

    if (lastIndex < template.length) {
      parts.push({
        type: "text",
        content: template.slice(lastIndex, template.length),
      });
    }

    return parts;
  };

  const parts = pareseDescription(
    heroConfig.description.template,
    heroConfig.skills,
  );

  console.log(parts);

  return <div></div>;
}
