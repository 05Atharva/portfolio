import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { site } from '@/app/site'
import { ResumeButton } from './ResumeDialog'

export default function ContactSection() {
  return (
    <section id="contact" className="section section-rule" tabIndex={-1} aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact-panel">
          <div className="section-heading" data-section-heading>
            <h2 id="contact-title">Let’s connect</h2>
            <p>I’m happy to connect about software engineering and potential collaborations.</p>
          </div>
          <div className="contact-actions">
            <a href={'mailto:' + site.email} className="button button-primary">
              <Mail size={18} aria-hidden="true" /> Email me
            </a>
            <ResumeButton />
          </div>
          <a className="contact-address text-link" href={'mailto:' + site.email}>{site.email}</a>
          <div className="contact-links">
            <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} aria-hidden="true" /> LinkedIn
            </a>
            <a className="text-link" href={site.github} target="_blank" rel="noreferrer">
              <Github size={17} aria-hidden="true" /> GitHub
            </a>
            <span><MapPin size={17} aria-hidden="true" /> {site.location}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
