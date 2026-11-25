import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading index="01" title="About" />
          <div className="glass rounded-2xl p-7 md:p-10 grid md:grid-cols-2 gap-8 text-[var(--text-muted)] leading-relaxed">
            <p>{personalInfo.bio}</p>
            <p>{personalInfo.bioExtended}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
