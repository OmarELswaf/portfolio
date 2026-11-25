import { PiGithubLogo, PiLinkedinLogo, PiEnvelopeSimple } from 'react-icons/pi';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const links = [[personalInfo.socials.github, 'GitHub', PiGithubLogo], [personalInfo.socials.linkedin, 'LinkedIn', PiLinkedinLogo], [personalInfo.socials.email, 'Email', PiEnvelopeSimple]];
  return (
    <footer className="py-12 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="caption-1" style={{ color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Omar Elsawaf. Built with React, Vite and Tailwind.</p>
        <ul className="flex gap-4">
          {links.map(([href, label, Icon]) => (
            <li key={label}><a href={href} aria-label={label} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className="transition-colors duration-300 hover:text-[var(--accent)]" style={{ color: 'var(--text-muted)' }}><Icon size={24} /></a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
