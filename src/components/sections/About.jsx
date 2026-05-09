import { motion } from 'framer-motion';
import { FiMapPin, FiBriefcase, FiCode, FiCheckCircle } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import GradientText from '../ui/GradientText';

const profileImage = '/src/assets/profile.png';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const infoItems = [
  { icon: FiMapPin, label: 'Location', value: personalInfo.location },
  { icon: FiBriefcase, label: 'Experience', value: '1+ Years' },
  { icon: FiCode, label: 'Specialization', value: 'MERN Stack' },
  { icon: FiCheckCircle, label: 'Availability', value: 'Open to Work' },
];

const whatIDo = [
  {
    icon: '🎨',
    title: 'Frontend',
    description: 'Building responsive, pixel-perfect UIs with React.js and modern CSS frameworks',
  },
  {
    icon: '⚙️',
    title: 'Backend',
    description: 'Designing scalable REST APIs and microservices with Node.js & Express',
  },
  {
    icon: '🔄',
    title: 'Full Stack',
    description: 'End-to-end application development from database design to deployment',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="Get to know me and what drives my passion for development" />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - Avatar Placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-[40%] flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-1 p-[2px]" style={{ transform: 'rotate(3deg)' }}>
                <div className="w-full h-full rounded-2xl bg-[var(--bg-card)] flex items-center justify-center overflow-hidden">
                  <img 
                    src={profileImage} 
                    alt="Omar Elsawaf" 
                    className="w-full h-full object-cover rounded-2xl"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="text-6xl font-extrabold text-gradient-1">OE</div>';
                    }}
                  />
                </div>
              </div>
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-[var(--accent)] opacity-60 blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-[var(--accent-secondary)] opacity-60 blur-sm"
              />
              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -right-8 w-4 h-4 rounded-full bg-[var(--accent)] opacity-40 blur-sm"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-[60%]"
          >
            <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mb-4 leading-relaxed">
              {personalInfo.bio}
            </motion.p>
            <motion.p variants={fadeUp} className="text-[var(--text-secondary)] mb-8 leading-relaxed">
              {personalInfo.bioExtended}
            </motion.p>

            {/* Info Grid */}
            <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 mb-8">
              {infoItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-3 rounded-xl border border-[var(--border)] bg-[var(--bg-card)]"
                >
                  <item.icon className="text-[var(--accent)] text-lg flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* What I Do */}
            <motion.div variants={fadeUp}>
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">What I Do</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {whatIDo.map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
                    className="p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors"
                  >
                    <span className="text-2xl mb-2 block">{item.icon}</span>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
