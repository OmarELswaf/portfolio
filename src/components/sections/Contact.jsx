import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../../data/portfolioData';
import SectionHeading from '../ui/SectionHeading';
import MagneticButton from '../ui/MagneticButton';

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const contactInfo = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
];

const socialLinks = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
  { icon: SiLeetcode, href: personalInfo.socials.leetcode, label: 'LeetCode' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [focused, setFocused] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: 'general', message: '' });
      setTimeout(() => setSent(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Let's Work Together" subtitle="Have a project in mind? Let's create something amazing" />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:flex-[3]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <motion.div key={field.name} variants={fadeUp} className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focused === field.name || formData[field.name]
                        ? 'top-1 text-xs text-[var(--accent)]'
                        : 'top-4 text-sm text-[var(--text-muted)]'
                    }`}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused('')}
                    placeholder=" "
                    className="w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:shadow-glow outline-none transition-all duration-300"
                    required
                  />
                </motion.div>
              ))}

              {/* Subject dropdown */}
              <motion.div variants={fadeUp} className="relative">
                <label className="absolute left-4 top-1 text-xs text-[var(--accent)] pointer-events-none">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:shadow-glow outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  <option value="general" className="bg-[var(--bg-card)]">General Inquiry</option>
                  <option value="project" className="bg-[var(--bg-card)]">Project Discussion</option>
                  <option value="collaboration" className="bg-[var(--bg-card)]">Collaboration</option>
                  <option value="other" className="bg-[var(--bg-card)]">Other</option>
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp} className="relative">
                <label
                  className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                    focused === 'message' || formData.message
                      ? 'top-1 text-xs text-[var(--accent)]'
                      : 'top-4 text-sm text-[var(--text-muted)]'
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  placeholder=" "
                  rows={5}
                  className="w-full px-4 pt-6 pb-2 rounded-xl bg-transparent border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:shadow-glow outline-none transition-all duration-300 resize-none"
                  required
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp}>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-1 text-white font-semibold shadow-glow hover:shadow-glow-hover transition-shadow flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {sending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <FiCheck /> Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:flex-[2] space-y-6"
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] hover:border-[var(--accent)] transition-colors"
              >
                <div className="p-3 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)]">
                  <item.icon size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-semibold text-[var(--text-primary)]">{item.value}</div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div variants={fadeUp}>
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4">Follow Me</h4>
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
