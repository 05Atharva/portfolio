import { ExternalLink } from 'lucide-react'
import { achievements, blogs, certifications } from './data'

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section section-rule" tabIndex={-1} aria-labelledby="achievements-title">
      <div className="shell">
        <div className="section-heading" data-section-heading>
          <h2 id="achievements-title">Recognition</h2>
          <p>Research, competition results, and professional credentials.</p>
        </div>
        <div className="recognition-grid">
          <div>
            <h3 className="list-heading">Achievements</h3>
            <ul className="evidence-list">
              {achievements.map((achievement) => (
                <li key={achievement.title}>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                  {achievement.link && (
                    <a className="text-link" href={achievement.link} target="_blank" rel="noreferrer">
                      Read on IEEE Xplore <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="list-heading">Certifications</h3>
            <ul className="evidence-list">
              {certifications.map((certification) => (
                <li key={certification.name}>
                  <h4>{certification.name}</h4>
                  <p>{certification.issuer} · {certification.date}</p>
                </li>
              ))}
            </ul>
            <h3 className="list-heading writing-heading">Writing</h3>
            <ul className="evidence-list">
              {blogs.map((blog) => (
                <li key={blog.title}>
                  <h4><a className="text-link" href={blog.url} target="_blank" rel="noreferrer">
                    {blog.title} <ExternalLink size={14} aria-hidden="true" />
                  </a></h4>
                  <p>{blog.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
