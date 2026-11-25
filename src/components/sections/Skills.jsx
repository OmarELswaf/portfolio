import { skills } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const groups = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Databases' },
  { key: 'tools', label: 'Tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading index="04" title="Skills" />
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map((g) => (
              <div key={g.key} className="glass rounded-2xl p-6">
                <h3 className="mono text-sm text-[var(--accent2)] uppercase tracking-widest mb-4">{g.label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills[g.key].map((s) => (
                    <li key={s.name} className="text-sm px-3.5 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:-translate-y-0.5 transition-all">{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
