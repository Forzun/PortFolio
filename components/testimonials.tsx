import Marquee from "react-fast-marquee";

export default function Testimonials() {
  const data = [
    {
      skill: "JavaScript",
    },
    {
      skill: "TyepScript",
    },
    {
      skill: "React",
    },
    {
      skill: "Node.js",
    },
    {
      skill: "Express",
    },
    {
      skill: "Neon.tech",
    },
    {
      skill: "Prisma",
    },
    {
      skill: "PostgresSQL",
    },
    {
      skill: "Turborepo",
    },
    {
      skill: "TailwindCss",
    },
    {
      skill: "Git",
    },
    {
      skill: "WebSockets",
    },
    {
      skill: "MongoDb",
    },
  ];

  return (
    <div className="py-10">
      <div className="mask-x-from-90% mask-x-to-100%">
        <Marquee speed={20} pauseOnHover>
          <div className="flex py-4">
            {data.map((item, index) => (
              <TestimonialsCard key={index} skill={item.skill} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

function TestimonialsCard({ skill }: { skill: string; logo?: string }) {
  return (
    <div className="shadow-custom mx-1 flex h-full max-h-40 w-full max-w-40 flex-col items-center justify-between gap-10 rounded-md p-4">
      <p className="text-sm text-neutral-700">{skill}</p>
    </div>
  );
}
