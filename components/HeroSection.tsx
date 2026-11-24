import Image from 'next/image'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { site } from '@/app/site'
import { ResumeButton } from './ResumeDialog'

export default function HeroSection() {
  return (
    <section id="home" className="hero shell" tabIndex={-1} aria-labelledby="hero-name">
      <div className="hero-copy">
        <p className="hero-role">{site.role}</p>
        <h1 id="hero-name">Atharva <span>Kanawade</span></h1>
        <p className="hero-description">
          I build multi-agent AI workflows, the backends that run them, and mobile apps people can use.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">View work</a>
          <ResumeButton />
        </div>
        <div className="hero-links">
          <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <Github size={19} aria-hidden="true" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <Linkedin size={19} aria-hidden="true" />
          </a>
          <a href={'mailto:' + site.email} aria-label="Email" title="Email">
            <Mail size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <figure className="portrait">
        <div className="portrait-stage">
          <div className="portrait-ticks" aria-hidden="true" />
          <div className="portrait-ring" aria-hidden="true" />
          <div className="portrait-frame">
            <Image src="/profile-opt.jpg" width={500} height={500} alt="Atharva Kanawade" priority />
          </div>
          <span className="portrait-cross portrait-cross-top" aria-hidden="true" />
          <span className="portrait-cross portrait-cross-bottom" aria-hidden="true" />
        </div>
        <figcaption><MapPin size={15} aria-hidden="true" /> {site.location}</figcaption>
      </figure>
    </section>
  )
}
