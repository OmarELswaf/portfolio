import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotY = ((x - centerX) / centerX) * 8;
    const rotX = ((centerY - y) / centerY) * 8;
    setRotateX(rotX);
    setRotateY(rotY);
    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] overflow-hidden shadow-card hover:border-[var(--accent)] transition-colors duration-300"
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(37,99,235,0.15), transparent 60%)`,
        }}
      />

      {/* Image/Thumbnail area */}
      <div className="relative aspect-video bg-[var(--bg-tertiary)] overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-hover)]/10 flex items-center justify-center">
            <span className="text-5xl font-extrabold text-[var(--accent)]/30">{project.title.charAt(0)}</span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--bg-primary)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl bg-gradient-1 text-white"
          >
            <FiExternalLink size={18} />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-xl border border-[var(--border)] text-white"
          >
            <FiGithub size={18} />
          </motion.a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{project.title}</h3>
        <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 text-xs font-mono rounded-full border border-[var(--border)] text-[var(--text-muted)] bg-[var(--bg-tertiary)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
