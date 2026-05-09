import { useRef } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import TimelineItem from '../common/TimelineItem';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function Experience() {
  const sectionRef = useRef(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section id="experience" className="py-24 md:py-32" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Experience" subtitle="My professional journey and contributions" />

        <div className="relative">
          {/* Center timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--bg-tertiary)] -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-1 rounded-full"
              style={{ height: `${Math.min(progress * 100, 100)}%` }}
            />
          </div>

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--bg-tertiary)]">
            <motion.div
              className="w-full bg-gradient-1 rounded-full"
              style={{ height: `${Math.min(progress * 100, 100)}%` }}
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {experience.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
