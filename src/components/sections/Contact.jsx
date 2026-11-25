import { FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

export default function Contact() {
  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading index="05" title="Contact" />
          <div className="relative glass rounded-3xl p-8 md:p-14 text-center overflow-hidden">
            <div className="blob w-64 h-64 bg-[var(--accent)] -top-20 -right-20" />
            <h3 className="relative text-3xl md:text-4xl font-extrabold">Let's build something <span className="grad-text">together</span></h3>
            <p className="relative mt-4 text-[var(--text-muted)] max-w-xl mx-auto">
              I'm open to junior full-stack roles and paid internships, and I reply to freelance inquiries too. Email is the fastest way to reach me.
            </p>
            <a href={personalInfo.socials.email} className="relative mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:scale-105 transition-transform">
              Say hello <FiMail />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
