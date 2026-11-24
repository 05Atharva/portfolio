import { ChevronDown } from 'lucide-react'
import { additionalTech, skills } from './data'

export default function SkillsSection() {
  return (
    <section id="skills" className="section section-rule" tabIndex={-1} aria-labelledby="skills-title">
      <div className="shell">
        <div className="section-heading" data-section-heading>
          <h2 id="skills-title">Technical skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([name, entries]) => (
            <details className="skill-group" key={name}>
              <summary>
                <span>{name}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </summary>
              <ul className="skill-list">
                {entries.map((entry) => (
                  <li key={entry.name}>
                    <strong>{entry.name}</strong>
                    <span>{entry.tools.join(' · ')}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <ul className="chip-list skills-tools" aria-label="Additional technologies">
          {additionalTech.map((tool) => <li key={tool}>{tool}</li>)}
        </ul>
      </div>
    </section>
  )
}
