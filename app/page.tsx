import Container from "@/components/container";
import Heading from "@/components/headng";
import LandingBlogs from "@/components/landing-blogs";
import Projects from "@/components/projects";
import SubHeading from "@/components/SubHeading";
import TestimonialsUpDown from "@/components/testimonials/UpDownTestimonials";
import { projects } from "@/constants/project";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Hello , there!</Heading>
        <SubHeading>
          I'm a software engineer with a passion for building scalable and
          efficient web applications, I'm currently searching for new
          opportunites to contribute my skill and grow as an engineer
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <TestimonialsUpDown />
      </Container>
    </div>
  );
}
