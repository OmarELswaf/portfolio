import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { SiFiverr, SiFreelancer } from 'react-icons/si';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

const socialIcons = [
  { href: personalInfo.socials.github, label: 'GitHub', Icon: FiGithub },
  { href: personalInfo.socials.linkedin, label: 'LinkedIn', Icon: FiLinkedin },
  { href: personalInfo.socials.fiverr, label: 'Fiverr', Icon: SiFiverr },
  { href: personalInfo.socials.freelancer, label: 'Freelancer', Icon: SiFreelancer },
  { href: personalInfo.socials.email, label: 'Email', Icon: FiMail },
].filter((s) => s.href);

export default function SideRail() {
  const [active, setActive] = useState('about');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] flex flex-col justify-between py-16 lg:py-24">
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text)]">
              <a href="#about">{personalInfo.name}</a>
            </h1>
            <h2 className="mt-3 text-lg md:text-xl font-medium text-[var(--text)]">{personalInfo.role}</h2>
            <p className="mt-4 max-w-xs text-[var(--text-muted)] leading-relaxed">{personalInfo.headline}</p>
          </div>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-tint)] transition-colors"
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>

        <nav className="hidden lg:block mt-16" aria-label="Sections">
          <ul className="space-y-4">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-4"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span
                      className={`h-px transition-all ${isActive ? 'w-16 bg-[var(--accent)]' : 'w-8 bg-[var(--text-muted)] group-hover:w-16 group-hover:bg-[var(--accent)]'}`}
                    />
                    <span
                      className={`mono text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)] group-hover:text-[var(--accent)]'}`}
                    >
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-12 lg:mt-0">
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--accent)] text-[var(--accent)] mono text-sm font-semibold hover:bg-[var(--accent-tint)] transition-colors mb-8"
        >
          Download CV <FiDownload />
        </a>
        <ul className="flex items-center gap-5" aria-label="Social links">
          {socialIcons.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <Icon size={22} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
