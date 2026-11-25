import type { Metadata } from 'next'
import { site } from '@/app/site'
import { projects } from '@/components/data'
import PortfolioPageLayout from '@/components/PortfolioPageLayout'
import ProjectCard from '@/components/ProjectCard'
import { ResumeButton } from '@/components/ResumeDialog'

const title = 'Work | ' + site.name
const description = 'Explore software engineering projects by Atharva Kanawade across AI, mobile apps, cybersecurity, and robotics.'
const url = site.url + '/work'
const images = [{ url: '/brand/social-card.png', width: 1200, height: 630, alt: site.name }]

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: site.name, type: 'website', images },
  twitter: { card: 'summary_large_image', title, description, images },
}

export default function WorkPage() {
  return (
    <PortfolioPageLayout page="work">
      <div className="shell section">
        <header className="section-heading">
          <h1>All projects</h1>
          <p>{projects.length} projects across AI, mobile development, security, and robotics. Explore the details and source links.</p>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} heading="h2" showIllustration={false} />
          ))}
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="/#contact">Get in touch</a>
          <ResumeButton />
        </div>
      </div>
    </PortfolioPageLayout>
  )
}
