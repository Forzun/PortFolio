import Container from "@/components/container";
import Heading from "@/components/headng";
import Projects from "@/components/projects";
import Scale from "@/components/scales";
import SubHeading from "@/components/SubHeading";
import { projects } from "@/constants/project";

export default function AvoutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen p-4 px-8 md:pt-20 md:pb-10">
        <Scale />
        <Heading>Projects</Heading>
        <SubHeading>
          Full-stack developer who lives in the terminal and occasionally visits
          Figma for fresh air. Backend-leaning, MERN-loving, and known for
          building real-time apps that mostly work (on purpose). I break things
          to learn and fix them like I planned it. Coffee in, clean code out.
        </SubHeading>
        <Projects projects={projects} />
      </Container>
    </div>
  );
}
