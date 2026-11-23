import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { projects } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';

function ProjectLinks({ project, size = 20 }) {
  return (
    <div className="flex items-center gap-4">
      {project.githubUrl && (
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository"
          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
          <FiGithub size={size} />
        </a>
      )}
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
          className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
          <FiExternalLink size={size} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 lg:py-20 scroll-mt-16">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
        <ul className="space-y-16">
          {featured.map((p) => (
            <li key={p.id} className="group">
              {p.image && (
                <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noopener noreferrer" className="block mb-4">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="rounded-lg border border-[var(--border)] w-full object-cover max-h-64 object-top group-hover:border-[var(--accent)] transition-colors"
                  />
                </a>
              )}
              <div className="flex items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-semibold">
                  <a href={p.liveUrl || p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    {p.title}
                  </a>
                </h3>
                <ProjectLinks project={p} />
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-3 max-w-2xl">{p.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1 mono text-xs text-[var(--text-muted)]">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </li>
          ))}
        </ul>

        {rest.length > 0 && (
          <div className="mt-20">
            <h3 className="mono text-sm text-[var(--accent)] uppercase tracking-widest mb-6">Other projects</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {rest.map((p) => (
                <li key={p.id}
                  className="p-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <FiFolder size={28} className="text-[var(--accent)]" />
                    <ProjectLinks project={p} size={18} />
                  </div>
                  <h4 className="font-semibold text-[var(--text)] mb-2">{p.title}</h4>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4 flex-1">{p.description}</p>
                  <ul className="flex flex-wrap gap-x-3 gap-y-1 mono text-xs text-[var(--text-muted)]">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}

        <p className="mt-14 text-center">
          <a href="https://github.com/OmarELswaf?tab=repositories" target="_blank" rel="noopener noreferrer"
            className="mono text-sm text-[var(--accent)] hover:underline">
            View the full archive on GitHub →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
