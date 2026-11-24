import Image from 'next/image'
import { site } from '@/app/site'
import SiteHeader from './SiteHeader'
import HeroSection from './HeroSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'
import AboutSection from './AboutSection'
import SkillsSection from './SkillsSection'
import AchievementsSection from './AchievementsSection'
import ContactSection from './ContactSection'
import { ResumeDialog } from './ResumeDialog'
import SectionMotion from './SectionMotion'

export default function Portfolio() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <AboutSection />
        <SkillsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <a href="#home" className="brand-link" aria-label={site.name + ', back to top'}>
            <Image src="/brand/ak-mark.svg" width={32} height={32} alt="" />
            <span>{site.name}</span>
          </a>
          <small>© 2026 {site.name}</small>
          <a className="text-link" href="#home">Back to top</a>
        </div>
      </footer>
      <ResumeDialog />
      <SectionMotion />
    </>
  )
}
