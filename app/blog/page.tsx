import Container from "@/components/container";
import Heading from "@/components/headng";
import Scale from "@/components/scales";
import SubHeading from "@/components/SubHeading";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import BlogCard from "@/components/blog-items";

export const metadata: Metadata = {
  title: "All blogs - forzun",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  console.log(allBlogs)

  return (
    <div className="flex min-h-screen items-start justify-center pt-15 md:pt-0">
      <Container className="relative min-h-screen px-8 md:pt-20 md:pb-10">
        <Scale />
        <Heading>All blogs</Heading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. Currently finding the place where i contribute my
          skills
        </SubHeading>
        <div className="flex flex-col gap-10 p-6 py-10">
        {allBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}
