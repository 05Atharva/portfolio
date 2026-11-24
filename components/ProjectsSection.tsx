'use client'

import { useState } from 'react'
import { AudioLines, ChevronDown, CircuitBoard, Github, Layers3, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { filterTags, projects } from './data'

const illustrations: Partial<Record<string, { icon: LucideIcon; className: string }>> = {
  'Cooking Application': { icon: Layers3, className: 'layers' },
  PRECURSOR: { icon: CircuitBoard, className: 'trace' },
  RagaStream: { icon: AudioLines, className: 'wave' },
  ARTEMIS: { icon: ShieldCheck, className: 'shield' },
}

type Project = (typeof projects)[number]

function ProjectCard({ project }: { project: Project }) {
  const illustration = illustrations[project.title]
  const Illustration = illustration?.icon

  return (
    <article className="project-card">
      {Illustration && (
        <div className={'project-visual visual-' + illustration.className} aria-hidden="true">
          <span className="visual-guide visual-guide-outer" />
          <span className="visual-guide visual-guide-inner" />
          <Illustration size={54} strokeWidth={1.25} />
        </div>
      )}
      <div className="project-body">
        <p className="project-tags">{project.tags.join(' / ')}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <details className="disclosure">
            <summary>Project details <ChevronDown size={16} aria-hidden="true" /></summary>
            <p>{project.subtitle}</p>
            <ul className="detail-list">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <ul className="chip-list" aria-label="Technologies">
              {project.tech.map((tool) => <li key={tool}>{tool}</li>)}
            </ul>
          </details>
          {project.github && (
            <a className="text-link source-link" href={project.github} target="_blank" rel="noreferrer"
              aria-label={'Source code for ' + project.title}>
              <Github size={16} aria-hidden="true" /> Source code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState('Featured')
  const visibleProjects = projects.filter((project) => {
    if (filter === 'Featured') return project.featured
    return filter === 'All' || project.tags.includes(filter)
  })

  return (
    <section id="projects" className="section section-rule" tabIndex={-1} aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-heading" data-section-heading>
          <h2 id="projects-title">Selected work</h2>
          <p>AI workflows, mobile apps, and systems built for real-world use.</p>
        </div>
        <div className="project-controls">
          <div className="project-filters" role="group" aria-label="Filter projects">
            {['Featured', ...filterTags].map((tag) => (
              <button key={tag} type="button" className="filter-button" aria-pressed={filter === tag}
                aria-controls="project-results" onClick={() => setFilter(tag)}>
                {tag === 'All' ? 'All projects' : tag}
              </button>
            ))}
          </div>
          <p className="result-count" role="status">{visibleProjects.length} projects</p>
        </div>
        <div className="project-grid" id="project-results">
          {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  )
}
