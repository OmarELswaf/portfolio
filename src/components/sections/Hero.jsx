import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown, FiMapPin } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { personalInfo, stats } from '../../data/portfolioData';

const roles = ['Full-Stack Developer', 'MERN Stack Developer', 'React & Node.js Engineer', 'ASP.NET Core Developer'];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = roles[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % roles.length); }
      }
    }, del ? 35 : 70);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return <span className="grad-text">{text}<span className="cursor" /></span>;
}

const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="blob w-72 h-72 bg-[var(--accent)] -top-10 -left-10" />
      <div className="blob w-80 h-80 bg-[var(--accent2)] bottom-0 right-0" style={{ animationDelay: '-6s' }} />
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p {...up(0.05)} className="inline-flex items-center gap-2 mono text-xs px-3 py-1.5 rounded-full glass text-[var(--text-muted)]">
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" /></span>
            Open to junior full-stack roles
          </motion.p>
          <motion.h1 {...up(0.15)} className="mt-6 text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm <span className="grad-text">Omar</span>
          </motion.h1>
          <motion.h2 {...up(0.25)} className="mt-4 text-2xl sm:text-3xl font-bold h-10">
            <Typer />
          </motion.h2>
          <motion.p {...up(0.35)} className="mt-6 text-[var(--text-muted)] text-lg max-w-xl mx-auto lg:mx-0">
            {personalInfo.headline}
          </motion.p>
          <motion.p {...up(0.4)} className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]"><FiMapPin /> {personalInfo.location}</motion.p>
          <motion.div {...up(0.5)} className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] hover:scale-105 transition-transform shadow-lg shadow-[var(--accent)]/30">
              View projects <FiArrowDown />
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold glass hover:bg-[var(--bg-hover)] transition-colors">
              Download CV <FiDownload />
            </a>
          </motion.div>
          <motion.ul {...up(0.6)} className="mt-8 flex gap-3 justify-center lg:justify-start" aria-label="Social links">
            {[[personalInfo.socials.github, 'GitHub', FiGithub], [personalInfo.socials.linkedin, 'LinkedIn', FiLinkedin], [personalInfo.socials.email, 'Email', FiMail]].map(([href, label, Icon]) => (
              <li key={label}>
                <a href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" aria-label={label}
                  className="grid place-items-center w-11 h-11 rounded-full glass text-[var(--text-muted)] hover:text-[var(--accent)] hover:-translate-y-1 transition-all">
                  <Icon size={19} />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div className="avatar-glow" />
            <div className="orbit" />
            <div className="avatar-ring" />
            <img src="/profile.jpg" alt="Omar Elsawaf" width="640" height="640"
              className="relative w-full h-full rounded-full object-cover border-4 border-[var(--bg)]" />
            <div className="hidden sm:flex items-center gap-1.5 float-a absolute -left-10 top-8 glass rounded-xl px-3 py-2 mono text-xs shadow-xl"><SiReact className="text-sky-400" /> React</div>
            <div className="hidden sm:flex items-center gap-1.5 float-b absolute -right-10 top-24 glass rounded-xl px-3 py-2 mono text-xs shadow-xl"><SiNodedotjs className="text-green-500" /> Node.js</div>
            <div className="hidden sm:flex items-center gap-1.5 float-a absolute left-2 -bottom-3 glass rounded-xl px-3 py-2 mono text-xs shadow-xl" style={{ animationDelay: '-2s' }}><SiMongodb className="text-emerald-500" /> MongoDB</div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 inset-x-0 hidden md:block">
        <ul className="max-w-3xl mx-auto grid grid-cols-4 gap-4 px-8">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <p className="text-2xl font-extrabold grad-text">{s.value}{s.suffix}</p>
              <p className="text-xs text-[var(--text-muted)]">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
