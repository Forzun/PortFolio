import Container from "@/components/container";
import Github from "@/components/github-bar";
import Hero from "@/components/Hero";
import LandingBlogs from "@/components/landing-blogs";
import ProfileCover from "@/components/landing/profile-cover";
import Landing from "@/components/layout/landing";

import Projects from "@/components/projects";
import Scales from "@/components/scales";
import Quote from "@/components/sections/quote-section";
import TestimonialsUpDown from "@/components/testimonials/UpDownTestimonials";
import { projects } from "@/constants/project";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen items-start justify-start">
      <Container className="season-surface relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <ProfileCover />
        <Hero />
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <TestimonialsUpDown />
        <Github />
        <Quote />
      </Container>
    </div>
  );
}
