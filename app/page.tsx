import Portfolio from '@/components/Portfolio'
import { site } from './site'

const homepage = site.url + '/'
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': homepage + '#website',
      url: homepage,
      name: site.name,
      alternateName: 'AtharvaK',
      description: site.description,
      publisher: { '@id': homepage + '#atharva' },
    },
    {
      '@type': 'ProfilePage',
      '@id': homepage + '#profile',
      url: homepage,
      isPartOf: { '@id': homepage + '#website' },
      mainEntity: { '@id': homepage + '#atharva' },
    },
    {
      '@type': 'Person',
      '@id': homepage + '#atharva',
      name: site.name,
      url: homepage,
      jobTitle: site.role,
      image: site.url + '/profile-opt.jpg',
      sameAs: [site.github, site.linkedin],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <Portfolio />
    </>
  )
}
