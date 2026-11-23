import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiFiverr, SiFreelancer } from 'react-icons/si';
import { personalInfo } from '../../data/portfolioData';

const socialIcons = [
  { href: personalInfo.socials.github, label: 'GitHub', Icon: FiGithub },
  { href: personalInfo.socials.linkedin, label: 'LinkedIn', Icon: FiLinkedin },
  { href: personalInfo.socials.fiverr, label: 'Fiverr', Icon: SiFiverr },
  { href: personalInfo.socials.freelancer, label: 'Freelancer', Icon: SiFreelancer },
  { href: personalInfo.socials.email, label: 'Email', Icon: FiMail },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="py-10 border-t border-[var(--border)] mt-8">
      {/* Mobile-only socials (desktop shows them in the side rail) */}
      <ul className="flex lg:hidden items-center justify-center gap-6 mb-6">
        {socialIcons.map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer"
              aria-label={label} className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              <Icon size={20} />
            </a>
          </li>
        ))}
      </ul>
      <p className="text-center mono text-xs text-[var(--text-muted)]">
        Built with React, Vite & Tailwind — <a href="https://github.com/OmarELswaf/portfolio" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">source on GitHub</a>
      </p>
    </footer>
  );
}
