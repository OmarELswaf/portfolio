import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, navLinks } from '../../data/portfolioData';
import GradientText from '../ui/GradientText';
import MagneticButton from '../ui/MagneticButton';

const socialLinks = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode, label: 'LeetCode' },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-[var(--border)] bg-[var(--bg-secondary)]"
    >
      {/* Gradient top border */}
      <div className="h-px bg-gradient-1" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Tagline */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-3">
              <GradientText>{personalInfo.firstName}</GradientText>
              <span className="text-[var(--text-primary)]"> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-[var(--text-primary)] font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <MagneticButton key={social.label}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            Built with <span className="text-[var(--accent)]">React</span> & <span className="text-[var(--accent)]">Motion.dev</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
