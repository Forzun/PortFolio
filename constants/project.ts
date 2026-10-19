import { ReactIcon, TypeScript, githubIcon } from "@/components/Icons";
import { Express } from "@/components/Icons/Express";
import { Prisma } from "@/components/Icons/Prisma";
import { Turborepo } from "@/components/Icons/Turborepo";
import { Typescript } from "@/components/Icons/TypeScript";
import Mongodb from "@/components/Icons/mongo";
import { NodeJs } from "@/components/Icons/node";
import { Postsql } from "@/components/Icons/postsq";
import Tailwindcss from "@/components/Icons/tailwindcss";
import Websocket from "@/components/Icons/websocket";

export type Projects = {
  title: string;
  slug: string;
  src: string;
  banner?: string;
  href: string;
  description: string;
  video?: string;
};

export type Skills = {
  label: string; 
  icon: string | (() => JSX.Element) }

export const projects: Projects[] = [
  {
    title: "Goo",
    slug: "goo",
    src: "/projects/landing-page/goo.webp", 
    description: "Goo CLI — An open-source AI coding CLI powered by local Ollama models with RAG-based memory",
    href: "https://github.com/Forzun/nexStack", 
    video: '/projects/videos/GooCli.mp4'
  },
  {
    title: "nexStack",
    slug: "nexstack",
    src: "/projects/landing-page/nexStack.webp", 
    description: "NexStack helps you monitor your websites in real time with instant uptime tracking, performance checks, and smart alerts.",
    href: "https://github.com/Forzun/nexStack", 
    video: '/projects/videos/nexStack.mp4'
  },
  {
    title: "DotDraw",
    slug: "dotdraw",
    src: "/projects/landing-page/dotDraw.webp",
    description: "A realtime collaborative whiteboard where everyone can draw, resize, move shapes, and see live cursors instantly — just like Figma, but built from scratch", 
    href:"https://github.com/Forzun/dotDraw",
    video: "/projects/videos/dotDraw.mp4"
  },
  {
    title:"Context-mini", 
    slug: "context-mini",
    src:"/projects/landing-page/context-mini.webp", 
    description: "Context-mini — Turning raw context into intelligent conversations with AI that actually understands your content, not just your prompts.",
    href: "https://github.com/Forzun/context-mini", 
    video: "/projects/videos/context.mp4" 
  },
  {
    title: "Nexus", 
    slug: "nexus",
    src: "/projects/landing-page/nexus.webp", 
    description:"Nexus is a modern note-taking and second-brain application that helps users create, organize, and refine notes with AI-powered assistance, making knowledge management faster, smarter, and more efficient.", 
    href:"https://nexus-5c3w.vercel.app/",
  },
  {
    title: "MindMesh",
    slug: "mindmesh",
    src: "/projects/landing-page/mindmesh.webp",
    description:
      "MindMesh might be your next second brain you can save anything you find on website and i know you haven't visited it yet so click it and goo",
    href: "https://mind-mesh-ochre.vercel.app/dashboard",
  },
  {
    title: "Whisper-AI", 
    slug: "whisper-ai",
    src:"/projects/landing-page/whisper-ai.webp", 
    description:"Whisper-AI is an AI-powered tool that helps users refine and enhance tweets by improving clarity, tone, and engagement, enabling faster creation of polished and impactful social media content.", 
    href:"https://whisper-ai-rose.vercel.app/"
  },
  {
    title: "WinChat",
    slug: "winchat",
    src: "/projects/landing-page/winchat.webp",
    description:
      "A chat app that allows you to chat with your friends and fmaily",
    href: "https://chat-app-six-murex-76.vercel.app",
  },
  {
    title: "hirrd",
    slug: "hirrd",
    src: "/projects/landing-page/hirrd.webp",
    description:
      "It's like second brain app that allows you to save tweet , video , iamge etc..",
    href: "https://hirrd-ten-vert.vercel.app/",
  },

  {
    title:"eclypse", 
    slug: "eclypse",
    src: "/projects/landing-page/eclypse.webp", 
    description:"Eclypse is a fashion and styling platform that helps users explore outfit ideas, discover trends, and visualize dressing styles through a modern and intuitive interface.", 
    href:"https://eclypse-833s.vercel.app/"
  },
  {
    title:"MovieRating", 
    slug: "movierating",
    src: "/projects/landing-page/movierating.webp", 
    description: "Just an movies rating plateform where your can see", 
    href:"https://movie-app-plum-ten.vercel.app"
  },
  {
    title:"SoftSell", 
    slug: "softsell",
    src:"/projects/landing-page/softsell.webp", 
    description:"Frontend of an website selling application where you can buy and purchase website", 
    href:"https://soft-sell-h95b.vercel.app/"
  }
];


export const skills: Skills[] = [
  {
    label: "JavaScript",
    icon: Typescript 
  },
  {
    label: "TyepScript",
    icon: TypeScript 
  },
  {
    label: "React",
    icon:  ReactIcon 
  },
  {
    label: "Node.js",
    icon: NodeJs
  },
  {
    label: "Express",
    icon: Express  
  },
  {
    label: "Prisma",
    icon: Prisma 
  },
  {
    label: "Postsql",
    icon:  Postsql 
  },
  {
    label: "Turborepo",
    icon:  Turborepo  
  },
  {
    label: "TailwindCss",
    icon:  Tailwindcss 
  },
  {
    label: "Git",
    icon: githubIcon 
  },
  {
    label: "WebSockets",
    icon: Websocket 
  },
  {
    label: "MongoDb",
    icon: Mongodb  
  },
];
