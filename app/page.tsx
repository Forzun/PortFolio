import Container from "@/components/container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello , there!
        </h1>
        <p className="text-secondary pt-4 max-w-lg text-sm md:text-sm">
          I'm a software engineer with a passion for building scalable and
          efficient web applications, I'm currently searching for new
          opportunites to contribute my skill and grow as an engineer
        </p>
      </Container> 
    </div>
  );
}
 