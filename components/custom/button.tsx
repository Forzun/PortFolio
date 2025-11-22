export default function Button({
  children,
  svg,
}: {
  children: React.ReactNode;
  svg?: React.ReactNode;
}) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md border-1 border-dashed border-neutral-400/70 bg-black/5 px-2 py-1 text-sm font-semibold shadow-2xl shadow-neutral-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-dashed hover:border-neutral-500 hover:bg-neutral-200/60 hover:shadow-2xl hover:shadow-neutral-600  inner-shadow">
      <span className="">{svg}</span>
      {children}
    </button>
  );
}
