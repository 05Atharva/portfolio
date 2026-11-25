import { site } from '@/app/site'
import { resumes } from '@/components/data'

export const dynamic = 'force-static'

export function GET() {
  const content = [
    '# ' + site.name,
    '',
    '> ' + site.description,
    '',
    '## Portfolio',
    '',
    '- [Home](' + site.url + '/): Professional summary and current role.',
    '- [Work](' + site.url + '/work): Full project directory with summaries, technical details, and source links where available.',
    '- [Experience](' + site.url + '/#experience): Current and past roles and contributions.',
    '- [Technical skills](' + site.url + '/#skills): Programming tools and engineering areas.',
    '- [Recognition](' + site.url + '/#achievements): Publications, competition results, and certifications.',
    '- [Blog](' + site.url + '/blog): Engineering writing and links to published articles.',
    '- [Contact](' + site.url + '/#contact): Email and professional profiles.',
    '- [Sitemap](' + site.url + '/sitemap.xml): All public pages and published articles.',
    '',
    '## Résumés',
    '',
    ...resumes.map((resume) => '- [' + resume.label + '](' + encodeURI(site.url + resume.href) + '): PDF download.'),
    '',
  ].join('\n')

  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
