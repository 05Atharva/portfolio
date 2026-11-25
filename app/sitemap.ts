import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'
import { site } from './site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url + '/' },
    { url: site.url + '/blog' },
    ...getPosts().map((post) => ({ url: site.url + '/blog/' + post.slug })),
  ]
}
