import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  svg?: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function Button({
  children,
  svg,
  icon,
  className,
}: ButtonProps) {
  const IconComponent = icon;

  return (
    <button
      className={cn(
        "inner-shadow inline-flex items-center gap-2 rounded-md border-1 border-dashed border-neutral-400/70 bg-black/5 px-2 py-1 text-sm font-semibold shadow-2xl shadow-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-dashed hover:border-neutral-500 hover:bg-neutral-200/60 hover:shadow-2xl hover:shadow-neutral-600",
        className,
      )}
    >
      {IconComponent && (
        <span className="">
          <IconComponent />
        </span>
      )}
      {svg && <span className="">{svg}</span>}
      {children}
    </button>
  );
}
