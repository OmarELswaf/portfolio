import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PiDownloadSimple, PiArrowDown, PiMapPin } from 'react-icons/pi';
import { personalInfo, stats } from '../../data/portfolioData';
import { nh } from '../../lib/nh';

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'React and Node.js Developer', 'ASP.NET Core Developer'];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setText(roles[0]); return; }
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
  return <span style={{ color: 'var(--accent)' }}>{text}<span className="cursor" /></span>;
}

const ease = [0.22, 1, 0.36, 1];
const up = (d = 0) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d, ease } });

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p {...up(0.05)} className="inline-flex items-center gap-2 caption-1 px-3 py-1 rounded-full card" style={{ color: 'var(--text-muted)' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Open to junior full stack roles
          </motion.p>
          <motion.h1 {...up(0.15)} className="heading-1 hero-heading mt-6 max-w-[680px] mx-auto lg:mx-0 pb-1">
            Hi, I'm Omar Elsawaf
          </motion.h1>
          <motion.h2 {...up(0.25)} className="heading-5 mt-4 h-8"><Typer /></motion.h2>
          <motion.p {...up(0.35)} className="body-3 mt-6 max-w-[680px] mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
            {nh(personalInfo.headline)}
          </motion.p>
          <motion.p {...up(0.4)} className="caption-1 mt-4 inline-flex items-center gap-1" style={{ color: 'var(--text-muted)' }}><PiMapPin size={16} /> {personalInfo.location}</motion.p>
          <motion.div {...up(0.5)} className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Download CV <PiDownloadSimple size={20} /></a>
            <a href="#projects" className="btn btn-ghost">See my projects <PiArrowDown size={20} /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease }} className="order-1 lg:order-2 flex justify-center">
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div className="orbit" />
            <div className="avatar-ring" />
            <img src="/profile.jpg" alt="Omar Elsawaf" width="640" height="640" className="relative w-full h-full rounded-full object-cover border-4" style={{ borderColor: 'var(--bg)' }} />
            <div className="hidden sm:block float-a absolute -left-10 top-8 card rounded-xl px-3 py-2 caption-1">React</div>
            <div className="hidden sm:block float-b absolute -right-10 top-24 card rounded-xl px-3 py-2 caption-1">Node.js</div>
            <div className="hidden sm:block float-a absolute left-2 -bottom-4 card rounded-xl px-3 py-2 caption-1" style={{ animationDelay: '-2s' }}>MongoDB</div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 inset-x-0 hidden md:block">
        <ul className="max-w-3xl mx-auto grid grid-cols-4 gap-4 px-8">
          {stats.map((s) => (
            <li key={s.label} className="text-center">
              <p className="num heading-5">{s.value}{s.suffix}</p>
              <p className="caption-4" style={{ color: 'var(--text-muted)' }}>{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
