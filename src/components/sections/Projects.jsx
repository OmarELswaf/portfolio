import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../common/ProjectCard';

const filterTabs = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'backend', label: 'Backend' },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Featured Projects" subtitle="A selection of my recent work and personal projects" />

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-1 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)]">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors"
              >
                {activeFilter === tab.key && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-1 rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${activeFilter === tab.key ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={fadeUp} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
