import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export default async function () {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  return (
    <div className="">
      <p className="text-secondary mb-7 max-w-lg pt-4 text-sm md:text-sm">
        Check out my Blogs
      </p>
      <div className="flex flex-col gap-4">
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
            <p className="text-secondary max-w-lg pt-3 text-sm md:text-sm">
              {truncate(blog.description || " ", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
