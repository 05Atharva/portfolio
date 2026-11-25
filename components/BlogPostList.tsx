import { formatPostDate, type Post } from '@/lib/blog'

export default function BlogPostList({ posts, headingLevel = 3 }: { posts: Post[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <ul className="blog-post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <article className="blog-teaser">
            {post.cover && (
              <img className="blog-thumbnail" src={post.cover.src} alt={post.cover.alt}
                loading="lazy" decoding="async" />
            )}
            <div className="blog-teaser-text">
              <time className="blog-date" dateTime={post.date}>{formatPostDate(post.date)}</time>
              <Heading><a href={'/blog/' + post.slug}>{post.title}</a></Heading>
              <p>{post.description}</p>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
