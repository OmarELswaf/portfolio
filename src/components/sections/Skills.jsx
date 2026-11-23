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
    <section id="skills" className="py-16 lg:py-20 scroll-mt-16">
      <Reveal>
        <SectionHeading index="04" title="Skills" />
        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((g) => (
            <div key={g.key}>
              <h3 className="mono text-sm text-[var(--accent)] uppercase tracking-widest mb-4">{g.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills[g.key].map((s) => (
                  <li key={s.name}
                    className="mono text-xs px-3 py-1.5 rounded-full bg-[var(--accent-tint)] text-[var(--accent)]">
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
