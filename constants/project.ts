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
  src: string;
  href: string;
  description: string;
  video?:string
};

export type Skills = {
  label: string; 
  icon: string | (() => JSX.Element) }

export const projects: Projects[] = [
  {
    title: "Goo",
    src: "/projects/landing-page/goo.png", 
    description: "Goo CLI — An open-source AI coding CLI powered by local Ollama models with RAG-based memory",
    href: "https://github.com/Forzun/nexStack", 
    video: '/projects/videos/nexStack.mp4'
  },
  {
    title: "nexStack",
    src: "https://i.pinimg.com/736x/31/72/94/3172943688b1ff9ef1ddf766525b10db.jpg", 
    description: "NexStack helps you monitor your websites in real time with instant uptime tracking, performance checks, and smart alerts.",
    href: "https://github.com/Forzun/nexStack", 
    video: '/projects/videos/nexStack.mp4'
  },
  {
    title: "DotDraw",
    src: "https://i.pinimg.com/736x/a9/4d/62/a94d6233d089245688dae8f76d83f735.jpg",
    description: "A realtime collaborative whiteboard where everyone can draw, resize, move shapes, and see live cursors instantly — just like Figma, but built from scratch", 
    href:"https://github.com/Forzun/dotDraw",
    video: "/projects/videos/dotDraw.mp4"
  },
  {
    title:"Context-mini", 
    src:"https://i.pinimg.com/1200x/2a/49/3a/2a493af568995ca3ca993dcdd785de10.jpg", 
    description: "Context-mini — Turning raw context into intelligent conversations with AI that actually understands your content, not just your prompts.",
    href: "https://github.com/Forzun/context-mini", 
    video: "/projects/videos/context.mp4" 
  },
  {
    title: "Nexus", 
    src: "https://i.pinimg.com/736x/90/e8/b8/90e8b888eeabb2340fa4aa1676054762.jpg", 
    description:"Nexus is a modern note-taking and second-brain application that helps users create, organize, and refine notes with AI-powered assistance, making knowledge management faster, smarter, and more efficient.", 
    href:"https://nexus-5c3w.vercel.app/",
  },
  {
    title: "MindMesh",
    src: "https://i.pinimg.com/1200x/25/10/13/25101378287c422809c1a140b42333fa.jpg",
    description:
      "Nexus is a modern note-taking and second-brain application that helps users create, organize, and refine notes with AI-powered assistance, making knowledge management faster, smarter, and more efficient.",
    href: "https://mind-mesh-ochre.vercel.app/dashboard",
  },
  {
    title: "Whisper-AI", 
    src:"https://i.pinimg.com/736x/8d/87/59/8d875934caad30f9903082ab39325a76.jpg", 
    description:"Whisper-AI is an AI-powered tool that helps users refine and enhance tweets by improving clarity, tone, and engagement, enabling faster creation of polished and impactful social media content.", 
    href:"https://whisper-ai-rose.vercel.app/"
  },
  {
    title: "WinChat",
    src: "https://i.pinimg.com/1200x/9a/e1/d6/9ae1d6cb780cf5ef2adc905975228991.jpg",
    description:
      "A chat app that allows you to chat with your friends and fmaily",
    href: "https://chat-app-six-murex-76.vercel.app",
  },
  {
    title: "hirrd",
    src: "https://i.pinimg.com/736x/46/47/b3/4647b3d547a68a4af46d03ce2260e9ee.jpg",
    description:
      "It's like second brain app that allows you to save tweet , video , iamge etc..",
    href: "https://hirrd-ten-vert.vercel.app/",
  },

  {
    title:"eclypse", 
    src: "https://i.pinimg.com/1200x/84/1c/98/841c989a4d2408b19db443e5d5b92026.jpg", 
    description:"Eclypse is a fashion and styling platform that helps users explore outfit ideas, discover trends, and visualize dressing styles through a modern and intuitive interface.", 
    href:"https://eclypse-833s.vercel.app/"
  },
  {
    title:"MovieRating", 
    src: "https://i.pinimg.com/736x/20/9a/0a/209a0aef8cb818ca4ce95cfe005e6451.jpg", 
    description: "Just an movies rating plateform where your can see", 
    href:"https://movie-app-plum-ten.vercel.app"
  },
  {
    title:"SoftSell", 
    src:"https://i.pinimg.com/736x/5f/40/36/5f4036e042ee70b4358ee903f6f01f71.jpg", 
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
