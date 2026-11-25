import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

function Links({ p }) {
  return (
    <div className="flex items-center gap-3">
      {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"><FiGithub size={18} /></a>}
      {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"><FiExternalLink size={18} /></a>}
    </div>
  );
}

function Card({ p }) {
  return (
    <li className="group glass rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-[var(--accent)] hover:shadow-2xl hover:shadow-[var(--accent)]/10 transition-all duration-300">
      {p.image ? (
        <a href={p.liveUrl || p.githubUrl || '#'} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        </a>
      ) : (
        <div className="h-2 bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-lg leading-snug">{p.title}</h3>
          <Links p={p} />
        </div>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">{p.description}</p>
        <ul className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => <li key={t} className="mono text-[11px] px-2.5 py-1 rounded-full bg-[var(--accent-tint)] text-[var(--accent)]">{t}</li>)}
        </ul>
      </div>
    </li>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="py-20 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{featured.map((p) => <Card key={p.id} p={p} />)}</ul>
          {rest.length > 0 && (
            <>
              <h3 className="mono text-sm text-[var(--accent2)] uppercase tracking-widest mt-16 mb-6">Other projects</h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{rest.map((p) => <Card key={p.id} p={p} />)}</ul>
            </>
          )}
          <p className="mt-12 text-center">
            <a href="https://github.com/OmarELswaf?tab=repositories" target="_blank" rel="noopener noreferrer" className="mono text-sm text-[var(--accent)] hover:underline">View the full archive on GitHub →</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
