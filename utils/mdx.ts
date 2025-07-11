import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "posts", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    if (!frontmatter) {
      return null;
    }

    return {
      content,
      frontmatter,
    };
  } catch (error) {
    console.error("error");
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "/", "posts"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getBlogFrontMatterBySlug(slug);
      return {
        slug,
        ...frontmatter,
      };
    }),
  );

  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "posts", `${slug}.mdx`),
    "utf-8",
  );

  if (!singleBlog) {
    return null;
  }

  const { frontmatter } = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};
