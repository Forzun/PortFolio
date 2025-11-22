import { BunIcon, ExpressIcon, NextjsIcon, TurborepoIcon, TypeScript } from "@/components/Icons";
import React from "react";

export const SkillsIcons: Record<string, React.ComponentType> = { 
    TypeScript: TypeScript,
    Nextjs: NextjsIcon,
    Turborepo: TurborepoIcon,
    Bun: BunIcon,
    Express: ExpressIcon
}


export const heroConfig = { 
    name: "Forzun", 
    title: "Full-Stack Dev & Bug Fixer.",

    skills: [ 
        { 
            name: "TypeScript",
            href: "https://www.typescriptlang.org/", 
            component: "TypeScriptIcon"
        }, 
        {
            name: "Nextjs", 
            href: "https://nextjs.org/",
            component: "NextjsIcon"
        }, 
        {
            name: "Turborepo",
            href: "https://turborepo.org/",
            component: "TurborepoIcon"
        },
        {
            name: "Bun",
            href: "https://bun.sh/",
            component: "BunIcon"
        },
        { 
            name: "Express",
            href: "https://expressjs.com/",
            component: "ExpressIcon"
        },
    ],

    description: { 
    template: "I create fast, polished apps with {skills:2} , {skills:1} , {skills:3} , {skills:0} , and {skills:4} to craft fast, polished apps. UI design is my soft performance.", 
    }, 
}









