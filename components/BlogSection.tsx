import { getPosts } from '@/lib/blog'
import BlogPostList from './BlogPostList'

export default function BlogSection() {
  const posts = getPosts().slice(0, 3)

  return (
    <section id="blog" className="section section-rule" tabIndex={-1} aria-labelledby="blog-title">
      <div className="shell">
        <div className="section-heading" data-section-heading>
          <h2 id="blog-title">Blog</h2>
          <p>Notes on software engineering, production AI, and things I’ve learned building them.</p>
        </div>
        {posts.length > 0 && <BlogPostList posts={posts} />}
        <a className="button button-secondary" href="/blog">Visit the blog</a>
      </div>
    </section>
  )
}
