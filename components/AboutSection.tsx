export default function AboutSection() {
  return (
    <section id="about" className="section section-rule about-section" tabIndex={-1} aria-labelledby="about-title">
      <div className="shell about-layout">
        <div className="section-heading" data-section-heading>
          <h2 id="about-title">About me</h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">I’m an Electronics &amp; Telecommunication Engineering student in Pune with a 9.02 CGPA.</p>
          <p>
            At Applied AI Consulting, I worked on multi-agent workflows and production backends.
            With Team Vajra, I led AI and ML work on UAV projects and built FPV racing drones.
          </p>
          <p>
            My engineering work spans cloud debugging, secure authentication, and tuning how a
            racing drone responds in flight. In each setting, I test how the system behaves where it will actually be used.
          </p>
          <a className="text-link" href="#skills">Explore technical skills</a>
        </div>
      </div>
    </section>
  )
}
