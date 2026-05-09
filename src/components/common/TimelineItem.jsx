import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';

export default function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-8 md:mb-0`}
      >
        <div className={`p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors duration-300 ${isLeft ? 'md:ml-auto' : 'md:mr-auto'}`} style={{ maxWidth: '480px' }}>
          {/* Date badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-1 text-white mb-3">
            {item.period}
          </span>
          {/* Company */}
          <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{item.company}</h3>
          {/* Role */}
          <h4 className="text-base font-semibold mb-3">
            <GradientText>{item.role}</GradientText>
          </h4>
          {/* Description */}
          <ul className={`space-y-1.5 mb-4 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
            {item.description.map((desc, i) => (
              <li key={i} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <span className="text-[var(--accent)] mt-1 flex-shrink-0">▹</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
          {/* Tech badges */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
            {item.tech.map((t) => (
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

      {/* Center dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-4 h-4 rounded-full bg-gradient-1 shadow-glow"
        />
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block flex-1" />
    </div>
  );
}
