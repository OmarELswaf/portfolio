import { skills } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

const groups = [['frontend', 'Frontend'], ['backend', 'Backend'], ['database', 'Databases'], ['tools', 'Tools']];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <SectionHeading index="04" title="Skills" />
          <div className="grid md:grid-cols-2 gap-6">
            {groups.map(([key, label]) => (
              <div key={key} className="card rounded-2xl p-6">
                <h3 className="title-2 mb-4">{label}</h3>
                <ul className="flex flex-wrap gap-2">
                  {skills[key].map((s) => <li key={s.name} className="body-6 px-3 py-1 rounded-full border transition-colors duration-300 hover:border-[var(--accent)]" style={{ borderColor: 'var(--border)' }}>{s.name}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
