import { experience } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
          <ol className="relative border-l border-[var(--border)] ml-2 space-y-10">
            {experience.map((job) => (
              <li key={job.id} className="pl-8 relative">
                <span className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] ring-4 ring-[var(--bg)]" />
                <div className="glass rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
                  <p className="mono text-xs text-[var(--accent2)]">{job.period}</p>
                  <h3 className="mt-1 font-bold text-lg">{job.role} · <span className="grad-text">{job.company}</span></h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-[var(--text-muted)] leading-relaxed">
                    {job.description.map((line, i) => (
                      <li key={i} className="flex gap-2"><span className="text-[var(--accent)] mt-1.5 text-[8px]">●</span>{line}</li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => <li key={t} className="mono text-xs px-3 py-1 rounded-full bg-[var(--accent-tint)] text-[var(--accent)]">{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
