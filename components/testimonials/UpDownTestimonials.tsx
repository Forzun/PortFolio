import { data } from "@/constants/project";
import { SectionHeading } from "../section-heading";

export default function TestimonialsUpDown() {
  return (
    <div className="shadow-section-inset px-4 py-4 my-5">
      <SectionHeading>Skills</SectionHeading>
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2 mask-x-from-90% mask-x-to-100% py-15">
        {data.map((item, index) => (
          <div key={index} className="flex">
            <TestimonialSquare key={index} skill={item.skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialSquare({ skill }: { skill: string }) {
  return (
    <div className="shadow-custom flex w-full max-w-60 flex-row justify-center rounded-md px-3 py-2 text-xs">
      <p>{skill}</p>
    </div>
  );
}
