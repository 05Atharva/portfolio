import './blog.css'
import { site } from '@/app/site'
import SiteHeader from '@/components/SiteHeader'
import { ResumeDialog } from '@/components/ResumeDialog'

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader blogPage />
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <small>© 2026 {site.name}</small>
          <a className="text-link" href="/" data-analytics-event="blog_to_portfolio">Back to portfolio</a>
        </div>
      </footer>
      <ResumeDialog />
    </>
  )
}
