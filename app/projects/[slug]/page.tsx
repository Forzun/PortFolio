import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Container from "@/components/container";
import SubHeading from "@/components/SubHeading";
import { projects } from "@/constants/project";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const banner = project.banner ?? project.src;

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen px-4 md:pt-20 md:pb-10">
        <Link
          href="/projects"
          className="mb-4 inline-flex items-center gap-2 px-4 text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="relative h-56 w-full overflow-hidden rounded-2xl md:h-80">
          <Image
            src={banner}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <h1 className="absolute bottom-0 p-6 text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-4xl">
            {project.title}
          </h1>
        </div>

        <SubHeading>{project.description}</SubHeading>

        {project.video ? (
          <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
            <video
              src={project.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video h-full w-full object-cover"
            />
          </div>
        ) : (
          <p className="mt-8 px-4 text-sm text-neutral-500 dark:text-neutral-400">
            No demo video available for this project yet.
          </p>
        )}

        <div className="mt-8 px-4">
          <Link
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          >
            Visit project
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
