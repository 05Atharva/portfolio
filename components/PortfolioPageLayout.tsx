import type { ReactNode } from 'react'
import { site } from '@/app/site'
import SiteHeader from './SiteHeader'
import { ResumeDialog } from './ResumeDialog'

export default function PortfolioPageLayout({ children, page }: { children: ReactNode; page: 'blog' | 'work' }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader page={page} />
      <main id="main" tabIndex={-1}>{children}</main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <small>© 2026 {site.name}</small>
          <a className="text-link" href="/" data-analytics-event={page === 'blog' ? 'blog_to_portfolio' : undefined}>
            Back to portfolio
          </a>
        </div>
      </footer>
      <ResumeDialog />
    </>
  )
}
