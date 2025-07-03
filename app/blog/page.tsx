import Container from "@/components/container";
import Heading from "@/components/headng";
import SubHeading from "@/components/SubHeading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "All blogs - forzun",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };

  return (
    <div className="flex min-h-screen items-start justify-center pt-15 md:pt-0">
      <Container className="min-h-screen px-10 md:pt-20 md:pb-10">
        <Heading>All blogs</Heading>
        <SubHeading>
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm currently finding the place where i contribute
          my skills
        </SubHeading>
        <div className="flex flex-col gap-10 py-10">
          {allBlogs.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary font-base text-base tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                  {new Date(blog.date || "").toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                {truncate(blog.description || " ", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
