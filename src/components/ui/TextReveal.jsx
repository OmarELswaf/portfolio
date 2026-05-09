import { motion } from 'framer-motion';

export default function TextReveal({ text, className = '', delay = 0 }) {
  const words = text.split(' ');

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.06,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
