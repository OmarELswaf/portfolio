// Numbered mono section heading, e.g. "02. Experience"
export default function SectionHeading({ index, title }) {
  return (
    <h2 className="flex items-baseline gap-3 mb-10">
      <span className="mono text-[var(--accent)] text-lg">{index}.</span>
      <span className="text-2xl md:text-3xl font-bold text-[var(--text)] whitespace-nowrap">{title}</span>
      <span className="hidden md:block flex-1 h-px bg-[var(--border)] self-center ml-2" />
    </h2>
  );
}
