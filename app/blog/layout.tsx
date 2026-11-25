import './blog.css'
import PortfolioPageLayout from '@/components/PortfolioPageLayout'

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <PortfolioPageLayout page="blog">{children}</PortfolioPageLayout>
}
