import Container from "@/components/container";
import Heading from "@/components/headng";
import Scale from "@/components/scales";
import { SectionHeading } from "@/components/section-heading";
import SubHeading from "@/components/SubHeading";
import TimeLine from "@/components/TimeLine";

export default function AvoutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen p-4 px-8 md:pt-20 md:pb-10">
        <Scale />
        <Heading>About Me</Heading>
        <SubHeading>
          Full-stack developer who lives in the terminal and occasionally visits
          Figma for fresh air. Backend-leaning, MERN-loving, and known for
          building real-time apps that mostly work (on purpose). I break things
          to learn and fix them like I planned it. Coffee in, clean code out.
        </SubHeading>
        <SectionHeading className="text-secondary text-sm md:text-sm mt-7 ml-6">
          Here's a timeline of my tech journey
        </SectionHeading>
        <TimeLine />
      </Container>
    </div>
  );
}
