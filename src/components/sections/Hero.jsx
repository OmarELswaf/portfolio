import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { personalInfo, stats } from '../../data/portfolioData';
import TextReveal from '../ui/TextReveal';
import GradientText from '../ui/GradientText';
import AnimatedCounter from '../ui/AnimatedCounter';
import MagneticButton from '../ui/MagneticButton';
import { useMousePosition } from '../../hooks/useMousePosition';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

export default function Hero() {
  const { normalizedX, normalizedY } = useMousePosition();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)] rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8"
        >
          {/* Left Side - 60% */}
          <div className="flex-1 lg:flex-[3] text-center lg:text-left">
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-secondary)] animate-pulse-slow" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">{personalInfo.role}</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              <span className="text-[var(--text-primary)]">I Build</span>
              <br />
              <TextReveal text="Digital Experiences" className="text-gradient-1" delay={0.5} />
            </motion.h1>

            {/* Subtext */}
            <motion.p variants={fadeUp} className="text-[var(--text-secondary)] text-lg max-w-md mx-auto lg:mx-0 mb-8">
              {personalInfo.tagline}. Crafting seamless user experiences with modern web technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <MagneticButton>
                <motion.a
                  href="#projects"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-1 text-white font-semibold shadow-glow hover:shadow-glow-hover transition-shadow"
                >
                  View Projects <FiArrowRight />
                </motion.a>
              </MagneticButton>
              <MagneticButton>
                <motion.a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"

                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--text-primary)] font-semibold hover:border-[var(--accent)] transition-colors"
                >
                  Download CV <FiDownload />
                </motion.a>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 40% */}
          <div className="flex-1 lg:flex-[2] relative hidden lg:flex items-center justify-center">
            <motion.div
              variants={scaleIn}
              style={{
                transform: `translate(${(normalizedX - 0.5) * 20}px, ${(normalizedY - 0.5) * 20}px)`,
              }}
              className="relative w-80 h-80"
            >
              {/* Central geometric shape */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-3xl border border-[var(--accent)]/20"
                style={{ transform: 'rotate(12deg)' }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-3xl border border-[var(--accent-secondary)]/20"
                style={{ transform: 'rotate(-8deg)' }}
              />

              {/* Center code card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute inset-8 glass rounded-2xl p-4 flex flex-col justify-center"
                style={{ transform: 'rotate(3deg)' }}
              >
                <div className="flex gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <code className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--accent)]">const</span> <span className="text-[var(--accent-secondary)]">app</span> = <span className="text-[var(--accent)]">express</span>();<br />
                  <span className="text-[var(--accent)]">const</span> <span className="text-[var(--accent-secondary)]">port</span> = <span className="text-yellow-400">3000</span>;<br />
                  app.<span className="text-[var(--accent)]">get</span>(<span className="text-yellow-400">'/'</span>, (req, res) =&gt; {'{'}<br />
                  &nbsp;&nbsp;res.<span className="text-[var(--accent)]">json</span>({'{'} <span className="text-yellow-400">'status'</span>: <span className="text-yellow-400">'MERN'</span> {'}'});<br />
                  {'}'});<br />
                  app.<span className="text-[var(--accent)]">listen</span>(port);
                </code>
              </motion.div>

              {/* Orbiting icons */}
              {[
                { Icon: SiReact, delay: 1.0, size: 28, orbit: 160 },
                { Icon: SiNodedotjs, delay: 1.2, size: 28, orbit: 180 },
                { Icon: SiMongodb, delay: 1.4, size: 28, orbit: 200 },
              ].map(({ Icon, delay, size, orbit }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay, duration: 0.4 }}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: -size / 2,
                    marginLeft: -size / 2,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: 'linear' }}
                    style={{ width: orbit, height: orbit, marginLeft: -orbit / 2, marginTop: -orbit / 2, position: 'absolute' }}
                  >
                    <Icon
                      size={size}
                      className="text-[var(--accent)] absolute"
                      style={{ top: 0, left: '50%', marginLeft: -size / 2 }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
