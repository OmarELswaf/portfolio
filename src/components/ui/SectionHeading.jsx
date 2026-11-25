export default function SectionHeading({ index, title }) {
  return (
    <h2 className="flex items-center gap-4 mb-12">
      <span className="mono text-sm px-2.5 py-1 rounded-md bg-[var(--accent-tint)] text-[var(--accent)]">{index}</span>
      <span className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</span>
      <span className="hidden md:block flex-1 h-px bg-gradient-to-r from-[var(--border)] to-transparent" />
    </h2>
  );
}
