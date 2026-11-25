import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import { notFound } from 'next/navigation'
import { site } from '@/app/site'
import ArticleMarkdown from '@/components/ArticleMarkdown'
import BlogPostList from '@/components/BlogPostList'
import { blogs } from '@/components/data'
import { ResumeButton } from '@/components/ResumeDialog'
import { formatPostDate, getPost, getPosts, getRelatedPosts, type Post } from '@/lib/blog'

type BlogPageProps = { params: Promise<{ slug?: string[] }> }

const blogTitle = 'Blog'
const blogDescription = 'Notes on software engineering, production AI, and building software around real workflows.'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ slug: [] }, ...getPosts().map((post) => ({ slug: [post.slug] }))]
}

async function resolvePost(params: BlogPageProps['params']) {
  const { slug = [] } = await params
  if (slug.length === 0) return
  const post = getPost(slug[0])
  if (!post || slug.length !== 1) notFound()
  return post
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = await resolvePost(params)
  const title = (post?.title ?? blogTitle) + ' | ' + site.name
  const description = post?.description ?? blogDescription
  const url = site.url + '/blog' + (post ? '/' + post.slug : '')
  const images = post?.cover
    ? [{ url: post.cover.src, alt: post.cover.alt }]
    : [{ url: '/brand/social-card.png', width: 1200, height: 630, alt: site.name }]

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images,
      ...(post ? { type: 'article', publishedTime: post.date, authors: [site.url] } : { type: 'website' }),
    },
    twitter: { card: 'summary_large_image', title, description, images },
  }
}

function BlogIndex() {
  const posts = getPosts()

  return (
    <div className="shell blog-shell">
      <header className="blog-intro">
        <h1>{blogTitle}</h1>
        <p>{blogDescription}</p>
      </header>
      {posts.length > 0 ? <BlogPostList posts={posts} headingLevel={2} /> : (
        <p className="blog-empty">The first article is in the works.</p>
      )}
      <section className="blog-elsewhere" aria-labelledby="elsewhere-title">
        <h2 id="elsewhere-title">Writing elsewhere</h2>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.url}>
              <h3><a className="text-link" href={blog.url} target="_blank" rel="noreferrer">{blog.title}</a></h3>
              <p>{blog.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function BlogArticle({ post }: { post: Post }) {
  const related = getRelatedPosts(post)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    mainEntityOfPage: site.url + '/blog/' + post.slug,
    author: { '@type': 'Person', name: site.name, url: site.url },
    ...(post.cover ? { image: site.url + post.cover.src } : {}),
  }

  return (
    <div className="shell article-shell">
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <article aria-labelledby="article-title">
        <header className="blog-intro article-intro">
          <a href="/blog" className="text-link">All articles</a>
          <p className="article-byline">
            <span>{site.name}</span>
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          </p>
          <h1 id="article-title">{post.title}</h1>
          <p>{post.description}</p>
        </header>
        {post.cover && (
          <figure className="article-cover">
            <img src={post.cover.src} alt={post.cover.alt} fetchPriority="high" decoding="async" />
            {post.cover.caption && <figcaption>{post.cover.caption}</figcaption>}
          </figure>
        )}
        <div className="article-prose"><ArticleMarkdown body={post.body} /></div>
      </article>
      <section className="article-end" aria-labelledby="read-next-title">
        <h2 id="read-next-title">More writing</h2>
        {related.length > 0 && <BlogPostList posts={related} />}
        <a className="text-link" href="/blog">Browse all articles</a>
      </section>
      <section className="article-contact" aria-labelledby="article-contact-title">
        <h2 id="article-contact-title">Have an idea or a question?</h2>
        <p>I'd like to hear what you're building or what you’d like me to write about next.</p>
        <div className="contact-actions">
          <a className="button button-primary" data-analytics-event="blog_email_click" href={'mailto:' + site.email}>
            <Mail size={18} aria-hidden="true" /> Email me
          </a>
          <a className="button button-secondary" data-analytics-event="blog_to_work" href="/#projects">View work</a>
          <ResumeButton />
        </div>
        <a className="text-link article-email" href={'mailto:' + site.email} data-analytics-event="blog_email_click">
          {site.email}
        </a>
      </section>
    </div>
  )
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await resolvePost(params)
  return post ? <BlogArticle post={post} /> : <BlogIndex />
}
