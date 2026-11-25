'use client'

import { useState } from 'react'
import { filterTags, projects } from './data'
import ProjectCard from './ProjectCard'

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
        <a className="button button-secondary project-directory-link" href="/work">Browse the project directory</a>
      </div>
    </section>
  )
}
