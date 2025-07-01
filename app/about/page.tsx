import Container from "@/components/container";
import Heading from "@/components/headng";
import SubHeading from "@/components/SubHeading";
import TimeLine from "@/components/TimeLine";

export default function AvoutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Heading>About Me</Heading>
        <SubHeading>
          Full-stack developer who lives in the terminal and occasionally visits
          Figma for fresh air. Backend-leaning, MERN-loving, and known for
          building real-time apps that mostly work (on purpose). I break things
          to learn and fix them like I planned it. Coffee in, clean code out.
        </SubHeading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here's a timeline of my tech journey
        </p>
        <TimeLine />
      </Container>
    </div>
  );
}
