# Publishing articles

The portfolio builds its blog from Markdown in this folder. Give each article a lowercase, hyphenated filename such as `testing-production-ai.md`. Its URL will be `/blog/testing-production-ai`.

Save images in `public/blog/testing-production-ai/`, then reference them with paths beginning `/blog/testing-production-ai/`. Use the article slug as the image folder name. Give public images descriptive alt text.

## Article template

```markdown
---
title: "Article title"
description: "A short summary for the blog index and link previews."
date: "2026-11-25"
cover: "/blog/testing-production-ai/cover.webp"
coverAlt: "Describe the cover image"
coverCaption: "Optional cover caption"
related:
  - another-article-slug
draft: true
---

Write the opening here. Use level-two headings for sections.

## A section with an image

![Describe what the image shows](/blog/testing-production-ai/diagram.webp "Optional caption below the image")
```

The title, description, date, and body are required. The cover, caption, and related list are optional. End each image block with a blank line so it renders as a standalone figure. The page adds links to published articles automatically and puts the manually selected articles first.

Keep drafts outside `public/`, especially their images. When publishing, move the images to their public folder and change `draft: true` to `draft: false` or remove that line. Run `npm run build` and check the article and links in `out/`. A push to the production branch deploys it through Vercel. The site updates the blog index, homepage previews, and sitemap from the published articles.

## Google Analytics

Create a GA4 Web data stream for `https://www.atharvakanawade.dev/`. Copy its Measurement ID, which starts with `G-`, and add it as `NEXT_PUBLIC_GA_MEASUREMENT_ID` under the Vercel project's production environment variables. Redeploy the project and check Analytics → Reports → Realtime after opening the site.

Google Analytics receives page views and events for opening portfolio links from the blog, clicking the article email link, and selecting a résumé PDF. To identify LinkedIn traffic, append `?utm_source=linkedin&utm_medium=social&utm_campaign=blog` to a shared article URL.
