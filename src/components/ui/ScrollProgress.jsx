import { motion } from 'framer-motion';
import { usePageScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = usePageScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-1 z-[100]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}
