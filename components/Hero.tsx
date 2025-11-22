"use client";

import { SkillsIcons, heroConfig } from "@/constants/skills";
import React from "react";
import Button from "./custom/button";
import SubHeading from "./SubHeading";
import Heading from "./headng";

export default function Hero() {
  function HandleSkill(component: keyof typeof SkillsIcons) {
    const skill = SkillsIcons[component];
    return skill;
  }

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


  return (
    <>
      <Heading>
        <span className="text-shadow-2xl bg-linear-to-b from-neutral-900 to-neutral-600/80 bg-clip-text text-transparent">
          Hey, I&apos;m Forzun
        </span>{" "}
        <span className="text-[1.8rem] text-neutral-500">
          — Full-Stack Dev & Bug Fixer.
        </span>
      </Heading>
      <SubHeading>
        {parts.map((part, index) => {
          if (part.type == "text") {
            return <span key={index}>{part.content}</span>;
          }

          if (part.type == "skill") {
            if (!part.skill) return null;
            const SkillComponent = HandleSkill(part.skill.name);
            if (!SkillComponent) return null;

            return (
              <Button svg={<SkillComponent />} key={index}>
                {part.skill.name}
              </Button>
            );
          }
        })}
      </SubHeading>
    </>
  );
}
