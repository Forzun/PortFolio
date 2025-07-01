import Container from "@/components/container";
import { Metadata } from "next";
import { getBlogs, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "All blogs - forzun",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = await params;
  const blog = await getSingleBlog(slug.slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-[200vh] px-10 md:pt-20 md:pb-10">
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
