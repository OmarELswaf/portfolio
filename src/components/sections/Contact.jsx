import { PiEnvelopeSimple, PiLinkedinLogo } from 'react-icons/pi';
import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <SectionHeading index="05" title="Contact" />
          <div className="card rounded-3xl p-8 md:p-12 text-center">
            <h3 className="heading-4 max-w-[680px] mx-auto">Open to junior full stack roles and paid internships</h3>
            <p className="body-3 mt-4 max-w-[680px] mx-auto" style={{ color: 'var(--text-muted)' }}>I also reply to freelance inquiries. Email is the fastest way to reach me.</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href={personalInfo.socials.email} className="btn btn-primary">Email Omar <PiEnvelopeSimple size={20} /></a>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn <PiLinkedinLogo size={20} /></a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
