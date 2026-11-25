import { experience } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { nh } from '../../lib/nh';

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <SectionHeading index="02" title="Experience" />
          <ol className="space-y-6">
            {experience.map((job) => (
              <li key={job.id} className="card rounded-2xl p-6 transition-colors duration-300 hover:bg-[var(--bg-hover)]">
                <p className="num caption-1" style={{ color: 'var(--accent)' }}>{job.period}</p>
                <h3 className="title-1 mt-1">{nh(job.role)}, <span style={{ color: 'var(--accent)' }}>{job.company}</span></h3>
                <ul className="mt-4 space-y-2 body-6" style={{ color: 'var(--text-muted)' }}>
                  {job.description.map((line, i) => <li key={i} className="flex gap-2"><span aria-hidden="true">•</span>{nh(line)}</li>)}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => <li key={t} className="caption-4 px-3 py-1 rounded-full" style={{ background: 'var(--accent-tint)', color: 'var(--accent)' }}>{t}</li>)}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
