import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export default function KonamiEaster() {
  const [index, setIndex] = useState(0);
  const [triggered, setTriggered] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (triggered) return;

    const key = e.key;
    if (key === KONAMI_CODE[index]) {
      const nextIndex = index + 1;
      setIndex(nextIndex);
      if (nextIndex === KONAMI_CODE.length) {
        setTriggered(true);
        setIndex(0);
      }
    } else {
      setIndex(0);
    }
  }, [index, triggered]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (triggered) {
      const timer = setTimeout(() => setTriggered(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [triggered]);

  return (
    <AnimatePresence>
      {triggered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] pointer-events-none flex items-center justify-center"
        >
          {/* Confetti particles */}
          {Array.from({ length: 50 }).map((_, i) => {
            const colors = ['#6c63ff', '#00d4aa', '#ff6b9d', '#ffd700', '#ff4444'];
            const color = colors[i % colors.length];
            const startX = 50;
            const startY = 50;
            const angle = (i / 50) * Math.PI * 2;
            const distance = 30 + Math.random() * 40;

            return (
              <motion.div
                key={i}
                initial={{
                  position: 'absolute',
                  left: `${startX}%`,
                  top: `${startY}%`,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  left: `${startX + Math.cos(angle) * distance}%`,
                  top: `${startY + Math.sin(angle) * distance}%`,
                  scale: [0, 1, 0],
                  opacity: [1, 1, 0],
                  rotate: Math.random() * 720 - 360,
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: 'easeOut',
                }}
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            );
          })}

          {/* Message */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-1 bg-clip-text text-transparent"
          >
            🎮 You found it!
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
