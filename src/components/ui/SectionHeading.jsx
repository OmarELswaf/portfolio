import { motion } from 'framer-motion';
import GradientText from './GradientText';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function SectionHeading({ title, subtitle, align = 'center' }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && (
        <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className={`h-1 bg-gradient-1 rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
        style={{ maxWidth: '80px' }}
      />
    </motion.div>
  );
}
