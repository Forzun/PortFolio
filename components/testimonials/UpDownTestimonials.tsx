import { skills } from "@/constants/project";
import { SectionHeading } from "../section-heading";


export default function TestimonialsUpDown() { 
  return (
    <div className="shadow-section-inset my-5 px-4 py-4">
      <SectionHeading>Skills</SectionHeading>
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-1 mask-x-from-90% mask-x-to-100% py-15">
        {skills.map((skill, index) => (
          <div key={index} className="flex">
            <TestimonialSquare key={index} skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialSquare({
  skill,
}: {
  skill: { label: string; icon: string | (() => JSX.Element) };
}) {
  const Icon = skill.icon;
  return (
    <div className="shadow-custom group flex w-full max-w-45 cursor-pointer items-center justify-center gap-2 rounded-md px-3 py-1.5 text-xs text-zinc-600 transition-colors duration-200 hover:text-black dark:text-zinc-400 dark:hover:text-white">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center grayscale transition-all duration-200 group-hover:grayscale-0 [&_svg]:h-full [&_svg]:w-full">
        {typeof Icon === "function" ? <Icon /> : null}
      </span>
      <p className="leading-none">{skill.label}</p>
    </div>
  );
}

