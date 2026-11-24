import { site } from '@/app/site'

export default function AboutSection() {
  return (
    <section id="about" className="section section-rule about-section" tabIndex={-1} aria-labelledby="about-title">
      <div className="shell about-layout">
        <div className="section-heading" data-section-heading>
          <h2 id="about-title">About me</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">At {site.employer}, I learn how shop-floor teams work and use that context to design software around their processes.</p>
          <p>
            Before joining {site.employer}, I worked on multi-agent AI workflows and production backends at Applied AI Consulting. With Team Vajra, I led AI and ML work on UAV projects and built FPV racing drones.
          </p>
          <p>
            I studied Electronics &amp; Telecommunication Engineering at Marathwada Mitra Mandal’s College of Engineering in Pune from 2022 to 2026 and earned an 8.41 CGPA.
          </p>
          <a className="text-link" href="#skills">Explore technical skills</a>
        </div>
      </div>
    </section>
  )
}
