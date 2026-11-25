import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { nh } from '../../lib/nh';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <SectionHeading index="01" title="About" />
          <div className="card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-8 body-3" style={{ color: 'var(--text-muted)' }}>
            <p>{nh(personalInfo.bio)}</p>
            <p>{nh(personalInfo.bioExtended)}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
