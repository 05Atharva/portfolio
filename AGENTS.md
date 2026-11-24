# Atharva Kanawade portfolio

This is a React and TypeScript site using the Next.js App Router and static export on Vercel. The production URL is https://www.atharvakanawade.dev/. The apex domain redirects there.

## Visitor stories

| Visitor | Path through the portfolio | What makes the visit successful |
| --- | --- | --- |
| Recruiter screening quickly | Name and Software Engineer role → selected work or résumé → experience → email or LinkedIn | The role and both primary actions are visible before the portrait on a phone. Work summaries show what the project did, and both existing résumé PDFs are easy to download. |
| Engineering hiring manager | Selected work → project filters and details → repository → experience and skills | Project cards give the problem and outcome up front. Technical evidence and source links are available from each appropriate card. Experience describes contributions in context. |
| Judge or potential collaborator | Selected work → recognition and IEEE publication → contact | Evidence, credentials, and the contact route are easy to find from direct section links. |
| Returning visitor | Browser tab, bookmark, or search result → direct section anchor | The AK mark and stable page title identify the site, and existing section links still resolve. |

## Design system

- Use the original AK monogram in `public/brand/ak-mark.svg`. Keep the favicon, touch icon, and social image aligned with it.
- Graphite and brass are the two brand colors. Their shades and neutral surfaces should occupy approximately 90% of the interface. Use complementary ice blue for focus, active navigation, and a few evidence highlights. The light palette uses paper and deeper brass and blue for legibility.
- Use Bricolage Grotesque for headings and Instrument Sans for body text. Apply the spacing, type, and color tokens in `app/globals.css`.
- Take inspiration from the precision of Tony Stark's interfaces through instrument-like framing, hardware details, and short motion cues. Keep navigation labels plain and use original artwork.
- Use Figma's principles of hierarchy, progressive disclosure, consistency, contrast, proximity, accessibility, and alignment. Put the role, work, and résumé before supporting detail. Keep tap targets, text contrast, and focus visibility strong in both themes.
- Author motion in CSS and small browser APIs. Use one staged hero entrance, restrained viewport and control feedback, and easing with a clear resting state. Respect reduced motion and keep content usable before hydration.
- [Figma UI design principles](https://www.figma.com/resource-library/ui-design-principles/)
- [CSS Animation](https://cssanimation.rocks/) · [OpenClassrooms animation principles](https://openclassrooms.com/en/courses/5625816-create-modern-css-animations/5794716-apply-the-12-principles-of-animation-to-the-web) · [UI Wiki animation principles](https://www.userinterface.wiki/12-principles-of-animation) · [SVGator examples](https://www.svgator.com/blog/tag/inspirational/) · [Tubik motion design](https://tubikstudio.com/blog/category/animation/)

## Maintenance

- Keep project, experience, skills, and credentials grounded in `components/data.ts`. Confirm time-sensitive dates, role status, metrics, and links before changing them.
- Preserve existing hash anchors and résumé downloads. Use server-rendered markup for core information and client components for interaction.
- Keep discoverability settings in `app/site.ts`, `app/layout.tsx`, the homepage structured data, and the exported robots and sitemap routes. If the production hostname changes, update the shared origin.
- Run `npm run build`. Check desktop and phone widths, both themes, keyboard navigation, reduced motion, project filters, résumé downloads, and the exported metadata and assets before shipping.
