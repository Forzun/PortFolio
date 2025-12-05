import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProfileCoverButtonProps {
  children: React.ReactNode;
  svg?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export default function ProfileCoverButton({
  children,
  svg,
  className,
}: ProfileCoverButtonProps) {
  const SvgComponent = svg;

  return (
    <div
      className={cn(
        "group px-1 flex w-full cursor-pointer items-center gap-2 rounded border-[1px] border-neutral-200/70 py-1 pr-2",
        className,
      )}
    >
      {SvgComponent && (
        <span>
          <SvgComponent className="size-15" />
        </span>
      )}
      <div className="flex w-full items-center justify-between text-neutral-800">
        <h1 className="relative mb-2 text-base font-light">
          {children}{" "}
          <span className="absolute bottom-0 left-0 h-[1px] w-full group-hover:bg-neutral-950"></span>
        </h1>
        <ArrowUpRight className="text-neutral-600" size={20} />
      </div>
    </div>
  );
}
