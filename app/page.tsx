import Container from "@/components/container";
import Hero from "@/components/Hero";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import Scales from "@/components/scales";
import TestimonialsUpDown from "@/components/testimonials/UpDownTestimonials";
import { projects } from "@/constants/project";

export default function Home() {
  return (
    <div className="flex h-full min-h-screen items-start justify-start">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Hero />
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <TestimonialsUpDown />
      </Container>
    </div>
  );
}
