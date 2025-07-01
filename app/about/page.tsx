import Container from "@/components/container";
import TimeLine from "@/components/TimeLine";

export default function AvoutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </h1>
        <p className="text-secondary md:text-md max-w-xl pt-4 text-sm">
          Full-stack developer who lives in the terminal and occasionally visits
          Figma for fresh air. Backend-leaning, MERN-loving, and known for
          building real-time apps that mostly work (on purpose). I break things
          to learn and fix them like I planned it. Coffee in, clean code out.
        </p>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          Here's a timeline of my tech journey
        </p>
        <TimeLine />
      </Container>
    </div>
  );
} 