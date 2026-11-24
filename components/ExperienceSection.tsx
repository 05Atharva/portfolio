import { ChevronDown } from 'lucide-react'
import { experience } from './data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section section-rule" tabIndex={-1} aria-labelledby="experience-title">
      <div className="shell">
        <div className="section-heading" data-section-heading>
          <h2 id="experience-title">Experience</h2>
          <p>Shop-floor software, production AI, application security, and UAV engineering.</p>
        </div>
        <div className="experience-list">
          {experience.map((item) => {
            const moreAchievements = item.achievements.slice(3)
            const hasDetails = moreAchievements.length > 0 || item.focus || item.sideProject || item.tech.length > 0

            return (
              <article className="experience-row" key={item.company}>
                <div className="experience-meta">
                  <p>{item.period}</p>
                  <p>{item.type}{item.location && ' · ' + item.location}</p>
                </div>
                <div className="experience-body">
                  <h3>{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                  {item.description && <p>{item.description}</p>}
                  <ul className="detail-list">
                    {item.achievements.slice(0, 3).map((achievement) => <li key={achievement}>{achievement}</li>)}
                  </ul>
                  {hasDetails && (
                    <details className="disclosure experience-details">
                      <summary>More about this role <ChevronDown size={16} aria-hidden="true" /></summary>
                      {moreAchievements.length > 0 && (
                        <ul className="detail-list">
                          {moreAchievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                        </ul>
                      )}
                      {item.focus && <p>{item.focus}</p>}
                      {item.sideProject && (
                        <div className="experience-project">
                          <h4>{item.sideProject.name}</h4>
                          <p>{item.sideProject.description}</p>
                          <ul className="detail-list">
                            {item.sideProject.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                          </ul>
                          <ul className="chip-list" aria-label="Side project technologies">
                            {item.sideProject.tech.map((tool) => <li key={tool}>{tool}</li>)}
                          </ul>
                        </div>
                      )}
                      {item.tech.length > 0 && (
                        <ul className="chip-list" aria-label="Technologies">
                          {item.tech.map((tool) => <li key={tool}>{tool}</li>)}
                        </ul>
                      )}
                    </details>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
