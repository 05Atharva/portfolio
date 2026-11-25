import { AudioLines, ChevronDown, CircuitBoard, Github, Layers3, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { projects } from './data'

const illustrations: Partial<Record<string, { icon: LucideIcon; className: string }>> = {
  'Cooking Application': { icon: Layers3, className: 'layers' },
  PRECURSOR: { icon: CircuitBoard, className: 'trace' },
  RagaStream: { icon: AudioLines, className: 'wave' },
  ARTEMIS: { icon: ShieldCheck, className: 'shield' },
}

type Project = (typeof projects)[number]

export default function ProjectCard({ project, heading: Heading = 'h3', showIllustration = true }: {
  project: Project
  heading?: 'h2' | 'h3'
  showIllustration?: boolean
}) {
  const illustration = illustrations[project.title]
  const Illustration = illustration?.icon

  return (
    <article className="project-card">
      {showIllustration && Illustration && (
        <div className={'project-visual visual-' + illustration.className} aria-hidden="true">
          <span className="visual-guide visual-guide-outer" />
          <span className="visual-guide visual-guide-inner" />
          <Illustration size={54} strokeWidth={1.25} />
        </div>
      )}
      <div className="project-body">
        <p className="project-tags">{project.tags.join(' / ')}</p>
        <Heading>{project.title}</Heading>
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
