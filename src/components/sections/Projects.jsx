import { PiGithubLogo, PiArrowUpRight } from 'react-icons/pi';
import { projects } from '../../data/portfolioData';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { nh } from '../../lib/nh';

function Links({ p }) {
  const c = 'transition-colors duration-300 hover:text-[var(--accent)]';
  return (
    <div className="flex items-center gap-3 shrink-0">
      {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} on GitHub`} className={c} style={{ color: 'var(--text-muted)' }}><PiGithubLogo size={20} /></a>}
      {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`} className={c} style={{ color: 'var(--text-muted)' }}><PiArrowUpRight size={20} /></a>}
    </div>
  );
}

function Card({ p }) {
  return (
    <li className="group card rounded-2xl overflow-hidden flex flex-col transition-all duration-500 ease-base hover:-translate-y-1">
      {p.image && (
        <a href={p.liveUrl || p.githubUrl || undefined} target="_blank" rel="noopener noreferrer" className="block overflow-hidden" tabIndex={-1}>
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-48 object-cover object-top transition-transform duration-500 ease-base group-hover:scale-105" />
        </a>
      )}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="title-2">{nh(p.title)}</h3>
          <Links p={p} />
        </div>
        <p className="body-6 mb-4 flex-1" style={{ color: 'var(--text-muted)' }}>{nh(p.description)}</p>
        <ul className="flex flex-wrap gap-2">
          {p.tech.map((t) => <li key={t} className="caption-4 px-2 py-1 rounded-full" style={{ background: 'var(--accent-tint)', color: 'var(--accent)' }}>{t}</li>)}
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
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <Reveal>
          <SectionHeading index="03" title="Projects" />
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{featured.map((p) => <Card key={p.id} p={p} />)}</ul>
          {rest.length > 0 && (
            <>
              <h3 className="title-1 mt-16 mb-6">Other projects</h3>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{rest.map((p) => <Card key={p.id} p={p} />)}</ul>
            </>
          )}
          <p className="mt-12 text-center">
            <a href="https://github.com/OmarELswaf?tab=repositories" target="_blank" rel="noopener noreferrer" className="button-sm hover:underline" style={{ color: 'var(--accent)' }}>View the full archive on GitHub</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
