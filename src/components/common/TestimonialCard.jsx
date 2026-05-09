import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialCard({ testimonial, tilt = 0 }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-sm hover:border-[var(--accent)] transition-colors duration-300"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      {/* Quote mark */}
      <div className="text-4xl text-[var(--accent)]/30 font-serif leading-none mb-2">&ldquo;</div>

      {/* Quote text */}
      <p className="text-sm text-[var(--text-secondary)] italic leading-relaxed mb-6">
        {testimonial.text}
      </p>

      {/* Person info */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-1 p-[1.5px] flex-shrink-0">
          <div className="w-full h-full rounded-full bg-[var(--bg-card)] flex items-center justify-center text-xs font-bold text-[var(--accent)]">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-[var(--text-primary)] truncate">{testimonial.name}</div>
          <div className="text-xs text-[var(--text-muted)] truncate">{testimonial.role}</div>
        </div>
        {/* Rating */}
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FiStar key={i} size={12} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
