import { useEffect, useState } from 'react';
import { PiDownloadSimple, PiSun, PiMoon } from 'react-icons/pi';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { useTheme } from '../../context/ThemeContext';

export default function SideRail() {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.href.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);

  const bar = { background: 'color-mix(in srgb, var(--bg) 70%, transparent)' };
  const line = 'absolute left-0 h-0.5 w-6 rounded-full transition-transform duration-500 ease-base';

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] btn btn-primary">Skip to content</a>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
        <div className="flex items-center gap-2 p-2 rounded-2xl border backdrop-blur-xl w-full md:w-auto justify-between" style={{ ...bar, borderColor: 'var(--border)' }}>
          <a href="#top" className="title-4 px-3" aria-label="Omar Elsawaf, back to top">Omar Elsawaf</a>
          <nav className="hidden md:flex items-center gap-1" aria-label="Sections">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const on = active === id;
              return (
                <a key={id} href={link.href} aria-current={on ? 'true' : undefined}
                  className="button-sm px-3 py-2 rounded-lg transition-colors duration-300"
                  style={{ background: on ? 'var(--accent-tint)' : 'transparent', color: on ? 'var(--accent)' : 'var(--text-muted)' }}>
                  {link.name}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-lg transition-colors duration-300 hover:bg-[var(--bg-hover)]" style={{ color: 'var(--text-muted)' }}>
              {theme === 'dark' ? <PiSun size={20} /> : <PiMoon size={20} />}
            </button>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex btn btn-primary button-sm">
              CV <PiDownloadSimple size={16} />
            </a>
            <button onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="md:hidden relative w-10 h-10 grid place-items-center rounded-lg">
              <span className="relative block w-6 h-6">
                <span className={line} style={{ top: 6, background: 'var(--text)', transform: open ? 'translateY(4px) rotate(45deg)' : 'none' }} />
                <span className={line} style={{ top: 14, background: 'var(--text)', transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden fixed inset-0 z-40 flex flex-col justify-center gap-6 px-8 backdrop-blur-2xl transition-opacity duration-500 ease-base"
        style={{ background: 'color-mix(in srgb, var(--bg) 95%, transparent)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }} aria-hidden={!open}>
        {[...navLinks, { name: 'Download CV', href: personalInfo.resumeUrl, ext: true }].map((l, i) => (
          <a key={l.name} href={l.href} tabIndex={open ? 0 : -1} target={l.ext ? '_blank' : undefined} rel={l.ext ? 'noopener noreferrer' : undefined}
            onClick={() => setOpen(false)} className="heading-5 transition-all duration-500 ease-base"
            style={{ opacity: open ? 1 : 0, transform: open ? 'none' : 'translateY(24px)', transitionDelay: open ? `${Math.min(i * 60, 400)}ms` : '0ms', color: active === l.href.slice(1) ? 'var(--accent)' : 'var(--text)' }}>
            {l.name}
          </a>
        ))}
      </div>
    </>
  );
}
