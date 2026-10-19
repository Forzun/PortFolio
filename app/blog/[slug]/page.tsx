import Container from "@/components/container";
import { getBlogFrontMatterBySlug, getBlogs, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontMatter = await getBlogFrontMatterBySlug(slug);

  if (!frontMatter) {
    return {
      title: "blog not found",
    };
  }

  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
}

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content } = blog;

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen px-6 md:px-10 md:pt-20 md:pb-10">
        <article className="prose mx-auto max-w-3xl dark:prose-invert">
          {content}
        </article>
      </Container>
    </div>
  );
}
