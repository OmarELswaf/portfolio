import { useEffect, useState } from 'react';
import { FiDownload, FiSun, FiMoon } from 'react-icons/fi';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export default function SideRail() {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'glass border-x-0 border-t-0' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-extrabold tracking-tight text-lg">
          <span className="grad-text">{'<'}OE{' />'}</span>
        </a>
        <nav className="hidden md:flex items-center gap-1" aria-label="Sections">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <a key={id} href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${active === id ? 'bg-[var(--accent-tint)] text-[var(--accent)]' : 'text-[var(--text-muted)] hover:text-[var(--text)]'}`}>
                {link.name}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label="Toggle theme"
            className="p-2 rounded-full text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[var(--accent-tint)] transition-colors">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:opacity-90 transition-opacity">
            CV <FiDownload />
          </a>
        </div>
      </div>
    </header>
  );
}
