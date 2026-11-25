import ReactMarkdown, { type Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'

const components: Components = {
  p({ node, children, ...props }) {
    const image = node?.children[0]
    if (node?.children.length === 1 && image?.type === 'element' && image.tagName === 'img') {
      const caption = image.properties.title
      return (
        <figure>
          {children}
          {typeof caption === 'string' && <figcaption>{caption}</figcaption>}
        </figure>
      )
    }
    return <p {...props}>{children}</p>
  },
  img({ node: _node, alt, title: _title, ...props }) {
    return <img {...props} alt={alt ?? ''} loading="lazy" decoding="async" />
  },
  table({ node: _node, ...props }) {
    return (
      <div className="article-table">
        <table {...props} />
      </div>
    )
  },
}

export default function ArticleMarkdown({ body }: { body: string }) {
  return <ReactMarkdown skipHtml remarkPlugins={[remarkGfm]} components={components}>{body}</ReactMarkdown>
}
