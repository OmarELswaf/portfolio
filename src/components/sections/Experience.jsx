import { experience } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-20 scroll-mt-16">
      <Reveal>
        <SectionHeading index="02" title="Experience" />
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.id} className="group md:grid md:grid-cols-8 md:gap-4">
              <p className="mono text-xs text-[var(--text-muted)] mt-1 md:col-span-2 whitespace-nowrap">
                {job.period}
              </p>
              <div className="md:col-span-6 mt-2 md:mt-0">
                <h3 className="font-semibold text-[var(--text)] text-base">
                  {job.role} · <span className="text-[var(--accent)]">{job.company}</span>
                </h3>
                <ul className="mt-2 space-y-1.5 text-sm text-[var(--text-muted)] leading-relaxed">
                  {job.description.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[var(--accent)] mt-1.5 text-[8px]">▸</span>
                      {line}
                    </li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <li key={t} className="mono text-xs px-3 py-1 rounded-full bg-[var(--accent-tint)] text-[var(--accent)]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
