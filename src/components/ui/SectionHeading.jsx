export default function SectionHeading({ index, title }) {
  return (
    <h2 className="flex items-center gap-4 mb-12">
      <span className="num caption-1 px-2 py-1 rounded-lg" style={{ background: 'var(--accent-tint)', color: 'var(--accent)' }}>{index}</span>
      <span className="heading-3">{title}</span>
    </h2>
  );
}
