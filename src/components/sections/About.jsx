import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-20 scroll-mt-16">
      <Reveal>
        <SectionHeading index="01" title="About" />
        <div className="space-y-4 text-[var(--text-muted)] leading-relaxed max-w-2xl">
          <p>{personalInfo.bio}</p>
          <p>{personalInfo.bioExtended}</p>
          <p className="mono text-sm text-[var(--accent)]">{personalInfo.location}</p>
        </div>
      </Reveal>
    </section>
  );
}
