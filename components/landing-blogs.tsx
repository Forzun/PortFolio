import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

export default async function () {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  return (
    <div className="">
      <SectionHeading className="pb-4" delay={0.3}>
        Check out my Blogs
      </SectionHeading>
      <div className="flex flex-col gap-4">
        {allBlogs.map((blog, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <Link href={`/blog/${blog.slug}`}>
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
              <p className="text-secondary max-w-lg pt-3 text-sm md:text-sm">
                {truncate(blog.description || " ", 150)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
