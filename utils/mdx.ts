import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import React from "react";
import Button from "@/components/custom/button";
import { ReactIcon } from "@/components/Icons";
import { Back } from "@/components/Icons/backIcon";


import { codeToHast } from "shiki";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image?: {
    href: string;
    alt: string;
  };
};

function getNodeText(node: any): string {
  if (!node) return "";
  if (typeof node.value === "string") return node.value;
  if (Array.isArray(node.children)) {
    return node.children.map(getNodeText).join("");
  }
  return "";
}

function rehypeShikiPlugin() {
  return async (tree: any) => {
    const { visit } = await import("unist-util-visit");
    const preNodes: { node: any; index: number; parent: any }[] = [];

    visit(tree, "element", (node: any, index: any, parent: any) => {
      if (
        node.tagName === "pre" &&
        Array.isArray(node.children) &&
        node.children.some((c: any) => c.tagName === "code") &&
        typeof index === "number" &&
        parent
      ) {
        preNodes.push({ node, index, parent });
      }
    });

    for (const { node, index, parent } of preNodes) {
      const codeNode = node.children.find((c: any) => c.tagName === "code");
      if (!codeNode) continue;

      const rawCode = getNodeText(codeNode);
      const className = codeNode.properties?.className || [];
      const classStr = Array.isArray(className) ? className.join(" ") : String(className);
      const match = /language-(\w+)/.exec(classStr);
      const lang = match ? match[1] : "text";

      try {
        const hast = await codeToHast(rawCode.trimEnd(), {
          lang,
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
        });

        const newPreNode = hast.children[0];
        if (newPreNode) {
          parent.children[index] = newPreNode;
        }
      } catch {
        try {
          const fallbackHast = await codeToHast(rawCode.trimEnd(), {
            lang: "text",
            themes: {
              light: "github-light",
              dark: "github-dark",
            },
            defaultColor: false,
          });
          const fallbackPre = fallbackHast.children[0];
          if (fallbackPre) {
            parent.children[index] = fallbackPre;
          }
        } catch {
          // Keep original node on error
        }
      }
    }
  };
}

// Create button variants with icons pre-configured
const ButtonWithReactIcon = (props: { children: React.ReactNode; className?: string }) => {
  return React.createElement(Button, { icon: Back, ...props , href:"/blog" });
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
      options: { 
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeShikiPlugin],
        },
      },
      components: {
        Button,
        ButtonWithReactIcon,
        ReactIcon,
        Back,
      },
    });

    if (!frontmatter) {
      return null;
    }

    return {
      content,
      frontmatter,
    };
  } catch (error) {
    console.error(error,"error");
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
