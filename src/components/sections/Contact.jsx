import { FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 scroll-mt-16">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
        <div className="max-w-xl">
          <p className="text-[var(--text-muted)] leading-relaxed mb-8">
            I'm open to junior full-stack roles and paid internships, and I reply to freelance
            inquiries too. The fastest way to reach me is email — I read everything.
          </p>
          <a
            href={personalInfo.socials.email}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent)] text-[var(--accent)] mono text-sm font-semibold hover:bg-[var(--accent-tint)] transition-colors"
          >
            Say hello <FiMail />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
