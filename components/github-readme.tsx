import { cn } from "@/lib/utils";
import { compileGithubReadme } from "@/utils/github-readme";

export default async function GithubReadme({
  repo,
  className,
}: {
  repo?: string;
  className?: string;
}) {
  if (!repo) return null;

  const content = await compileGithubReadme(repo);

  if (!content) {
    return (
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        README is not available for this project yet.
      </p>
    );
  }

  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        "prose-headings:scroll-mt-24 prose-pre:bg-transparent prose-pre:p-0",
        "prose-img:my-6 prose-a:break-words",
        className,
      )}
    >
      {content}
    </article>
  );
}
