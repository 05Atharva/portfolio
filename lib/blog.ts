import { readdirSync, readFileSync, statSync } from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { cache } from 'react'

const articlesDirectory = path.join(process.cwd(), 'content', 'blog')
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  body: string
  cover?: { src: string; alt: string; caption?: string }
  related: string[]
}

function nonempty(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value.trim() : undefined
}

function publicationDate(value: unknown): string | undefined {
  const date = value instanceof Date ? value.toISOString().slice(0, 10) : nonempty(value)
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return
  const parsed = new Date(date)
  if (!Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date) return date
}

export const getPosts = cache((): Post[] => {
  const posts = readdirSync(articlesDirectory, { withFileTypes: true }).flatMap((entry) => {
    if (!entry.isFile() || !entry.name.endsWith('.md') || entry.name === 'README.md') return []

    const slug = entry.name.slice(0, -3)
    const { data, content } = matter(readFileSync(path.join(articlesDirectory, entry.name), 'utf8'))
    if (data.draft === true) return []

    const title = nonempty(data.title)
    const description = nonempty(data.description)
    const date = publicationDate(data.date)
    const body = content.trim()
    if (!slugPattern.test(slug) || !title || !description || !date || !body) {
      throw new Error(entry.name + ' needs a lowercase URL slug, title, description, publication date, and body.')
    }

    const src = nonempty(data.cover)
    const alt = nonempty(data.coverAlt)
    if (src && (!src.startsWith('/blog/' + slug + '/') || !alt)) {
      throw new Error(entry.name + ' needs a cover under /blog/' + slug + '/ and coverAlt text.')
    }

    if (src && !statSync(path.join(process.cwd(), 'public', src), { throwIfNoEntry: false })?.isFile()) {
      throw new Error(entry.name + ' cover file is missing from public' + src + '.')
    }

    const post: Post = {
      slug, title, description, date, body,
      cover: src && alt ? { src, alt, caption: nonempty(data.coverCaption) } : undefined,
      related: Array.isArray(data.related)
        ? data.related.filter((value): value is string => typeof value === 'string' && slugPattern.test(value))
        : [],
    }
    return [post]
  })

  return posts.sort((first, second) => second.date.localeCompare(first.date) || first.slug.localeCompare(second.slug))
})

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug)
}

export function getRelatedPosts(post: Post) {
  const posts = getPosts().filter((candidate) => candidate.slug !== post.slug)
  const linkedPosts = post.related.flatMap((slug) => posts.find((candidate) => candidate.slug === slug) ?? [])
  return [...new Set([...linkedPosts, ...posts])].slice(0, 3)
}

export function formatPostDate(date: string) {
  return dateFormatter.format(new Date(date))
}
