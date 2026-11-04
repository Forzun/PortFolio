import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { rehypeShikiPlugin } from "@/utils/mdx";

const GITHUB_API = "https://api.github.com";
const VOID_ELEMENTS =
  "area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr";

type Repo = {
  owner: string;
  name: string;
  full: string;
};

export function parseRepo(input: string): Repo | null {
  const cleaned = input
    .trim()
    .replace(/^https?:\/\/github\.com\//i, "")
    .replace(/^git@github\.com:/i, "")
    .replace(/\.git$/i, "")
    .replace(/\/+$/, "");

  const [owner, name] = cleaned.split("/");
  if (!owner || !name) return null;

  return { owner, name, full: `${owner}/${name}` };
}

async function fetchReadme(repo: Repo) {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.raw+json",
    "User-Agent": "forzun-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(`${GITHUB_API}/repos/${repo.full}/readme`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!response.ok) return null;

    const markdown = await response.text();
    return markdown.trim() ? markdown : null;
  } catch (error) {
    console.error(`Failed to fetch README for ${repo.full}`, error);
    return null;
  }
}

function isAbsoluteUrl(url: string) {
  return /^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(url);
}

function resolveUrl(url: string, repo: Repo, kind: "image" | "link") {
  const trimmed = url.trim();

  if (!trimmed || isAbsoluteUrl(trimmed)) return trimmed;

  const path = trimmed
    .replace(/^\.\//, "")
    .replace(/^\/+/, "")
    .replace(/ /g, "%20");
  const base =
    kind === "image"
      ? `https://raw.githubusercontent.com/${repo.owner}/${repo.name}/HEAD`
      : `https://github.com/${repo.owner}/${repo.name}/blob/HEAD`;

  return `${base}/${path}`;
}

function normalizeReadme(markdown: string, repo: Repo) {
  let source = markdown.replace(/<!--[\s\S]*?-->/g, "");

  source = source.replace(
    new RegExp(`<(${VOID_ELEMENTS})(\\s[^<>]*?)?>`, "gi"),
    (match, tag: string, attributes = "") =>
      match.endsWith("/>") ? match : `<${tag}${attributes} />`,
  );

  source = source.replace(
    /(<img\b[^>]*?\bsrc=)(["'])([^"']+)\2/gi,
    (_match, prefix, quote, url) =>
      `${prefix}${quote}${resolveUrl(url, repo, "image")}${quote}`,
  );

  source = source.replace(
    /(<a\b[^>]*?\bhref=)(["'])([^"']+)\2/gi,
    (_match, prefix, quote, url) =>
      `${prefix}${quote}${resolveUrl(url, repo, "link")}${quote}`,
  );

  source = source.replace(
    /!\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g,
    (_match, alt, url, title = "") =>
      `![${alt}](${resolveUrl(url, repo, "image")}${title})`,
  );

  source = source.replace(
    /(?<!!)\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g,
    (_match, text, url, title = "") =>
      `[${text}](${resolveUrl(url, repo, "link")}${title})`,
  );

  return source;
}

export async function getGithubReadme(repoInput: string) {
  const repo = parseRepo(repoInput);
  if (!repo) return null;

  const markdown = await fetchReadme(repo);
  if (!markdown) return null;

  return { ...repo, markdown };
}

export async function compileGithubReadme(repoInput: string) {
  const readme = await getGithubReadme(repoInput);
  if (!readme) return null;

  try {
    const { content } = await compileMDX({
      source: normalizeReadme(readme.markdown, readme),
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [rehypeShikiPlugin],
        },
      },
      components: {
        img: (props) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            {...props}
            loading="lazy"
            className="mx-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
          />
        ),
        a: ({ href, ...props }) => (
          <a
            {...props}
            href={href}
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noreferrer" : undefined}
          />
        ),
      },
    });

    return content;
  } catch (error) {
    console.error(`Failed to render README for ${readme.full}`, error);
    return null;
  }
}
