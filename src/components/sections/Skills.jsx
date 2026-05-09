import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import TechBadge from '../ui/TechBadge';

const tabs = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'tools', label: 'Tools' },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills & Technologies" subtitle="Technologies I work with to bring ideas to life" />

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                {activeTab === tab.key && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-1 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeTab === tab.key ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills[activeTab].map((skill) => (
              <motion.div key={skill.name} variants={fadeUp}>
                <TechBadge name={skill.name} icon={skill.icon} level={skill.level} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
