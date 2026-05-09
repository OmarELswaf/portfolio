import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';

const iconMap = {
  SiReact: SiIcons.SiReact,
  SiRedux: SiIcons.SiRedux,
  SiNextdotjs: SiIcons.SiNextdotjs,
  SiTailwindcss: SiIcons.SiTailwindcss,
  SiJavascript: SiIcons.SiJavascript,
  SiHtml5: SiIcons.SiHtml5,
  SiCss3: SiIcons.SiCss,
  SiTypescript: SiIcons.SiTypescript,
  SiNodedotjs: SiIcons.SiNodedotjs,
  SiExpress: SiIcons.SiExpress,
  SiPostman: SiIcons.SiPostman,
  SiGraphql: SiIcons.SiGraphql,
  SiSocketdotio: SiIcons.SiSocketdotio,
  SiJsonwebtokens: SiIcons.SiJsonwebtokens,
  SiMongodb: SiIcons.SiMongodb,
  SiMysql: SiIcons.SiMysql,
  SiRedis: SiIcons.SiRedis,
  SiFirebase: SiIcons.SiFirebase,
  SiGit: SiIcons.SiGit,
  SiDocker: SiIcons.SiDocker,
  SiAmazonaws: FiCloud,
  SiGithubactions: SiIcons.SiGithubactions,
  SiLinux: SiIcons.SiLinux,
  SiVscodium: SiIcons.SiVscodium,
};

export default function TechBadge({ name, icon, level }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const IconComponent = iconMap[icon];

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    setPosition({
      x: Math.max(-5, Math.min(5, deltaX)),
      y: Math.max(-5, Math.min(5, deltaY)),
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 0 20px rgba(108,99,255,0.3)',
      }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors duration-300 cursor-default group"
    >
      {IconComponent && (
        <IconComponent className="text-xl text-[var(--accent)] group-hover:text-[var(--accent-hover)] transition-colors" />
      )}
      <span className="font-mono text-sm text-[var(--text-primary)]">{name}</span>
      {level && (
        <div className="ml-auto w-16 h-1.5 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-1"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          />
        </div>
      )}
    </motion.div>
  );
}
