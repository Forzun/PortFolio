"use client";

import { SkillsIcons, heroConfig } from "@/constants/skills";
import React from "react";
import Button from "./custom/button";
import SubHeading from "./SubHeading";
import Heading from "./headng";
import { SocialMedia, SocialMediaProps } from "@/constants/socialCover";
import { Tooltip, TooltipGroup } from "./ui/tooltip-group";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
      <div>
        <Heading>
          <span className="text-shadow-2xl bg-linear-to-b from-neutral-900 to-neutral-600/80 bg-clip-text text-3xl text-transparent">
            Hey, I&apos;m{" "}
            <span className="font-instrument text-4xl font-normal text-neutral-600 lg:text-5xl">
              Forzun
            </span>
          </span>{" "}
          <span className="text-[1.8rem] text-neutral-400/90">
            — Full-Stack Dev & Bug Fixer.
          </span>
        </Heading>
        <SubHeading className="text-center md:text-start">
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

        <div className="gap-0.5 relative flex px-3 mt-4">
          {SocialMedia.map((media: SocialMediaProps, index) => {
            return (
              <TooltipGroup
                openDelay={201}
                skipDelay={400}
                key={media.label}
                className="flex items-center gap-1"
              >
                <Tooltip side="top" label={media.label}>
                  <div className="flex gap-0.5 rounded-lg border border-neutral-100 p-0.5">
                    <Link
                      className={cn(
                        "rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-2 text-sm text-neutral-500",
                        "relative before:absolute before:inset-0 before:bg-linear-to-b before:from-neutral-200/10 before:to-transparent",
                        "inset-shadow-2xs inset-shadow-neutral-100 hover:bg-neutral-100",
                      )}
                      key={index}
                      href={media.href}
                    >
                      <media.icons
                        className={cn(
                          "size-4.5",
                          media.hover &&
                            "group-hover:text-neutral-900 dark:group-hover:text-neutral-100",
                        )}
                      />
                    </Link>
                  </div>
                </Tooltip>
              </TooltipGroup>
            );
          })}
        </div>
      </div>
    </>
  );
}
