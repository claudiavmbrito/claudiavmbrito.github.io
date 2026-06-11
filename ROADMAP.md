# Site Roadmap — claudiavmbrito.github.io

A plan to clean up template cruft, fix SEO/metadata, and apply a **light visual
rebrand** while staying on academicpages / Jekyll (GitHub Pages). Scope chosen:
*light restyle* — distinctive identity without a platform migration.

Work top to bottom. Each item is independently shippable.

---

## Phase 1 — Cleanup & repo hygiene ✅ DONE

- [x] **Untrack committed artifacts**: untracked `Gemfile.lock` and `files/.DS_Store`
  (kept on disk), removed the stray `_tryouts.textClipping`.
- [x] **Update `.gitignore`** — added `Gemfile.lock`, `.bundle/`, `*.textClipping`.
- [x] **Delete stock demo posts** in `_posts/` (all 5) + `_drafts/post-draft.md`.
- [x] **Delete demo pages** in `_pages/`: `markdown.md`, `non-menu-page.md`,
  `archive-layout-with-content.md`, `terms.md`.
- [x] **Remove dead duplicates & disabled features**: `_pages/talks.html` (duplicate
  `/talks/` permalink — `talks.md` is the maintained one), `_pages/teaching.html`
  (fully commented out), and the disabled talkmap feature (`_pages/talkmap.html`,
  `talkmap.ipynb`, `talkmap.py`, `talkmap/`). Also removed the orphan
  `_pages/tryouts.md` demo page + its `tryout_horizontal.html` include.
- [x] **Rewrite `README.md`** — now describes this site + local build steps.

> **Correction discovered during cleanup:** `_tryouts/` is **not** abandoned — it
> holds the conference **posters** rendered in the Posters section of `talks.md`
> (via `tryout.html`). It was kept. The misleading name could be renamed to
> `_posters` in a later phase (collection rename + update `talks.md` + `_config.yml`).

## Phase 2 — Metadata & SEO ✅ DONE

- [x] `title` — set to `"Cláudia Brito"` (proper casing).
- [x] `description` — replaced the `"personal description"` placeholder with a real
  one-line meta description (research focus + affiliations).
- [x] `og_image` — set to `cvmbrito.jpg` (the portrait in `/images/`) for link
  previews (LinkedIn, X, Slack). *Optional later: a dedicated 1200×630 banner reads
  better than a portrait crop on some platforms.*
- [x] `social:` block — `type: Person`, `name`, and `links` (sameAs) pointing to
  Scholar, ORCID, LinkedIn, GitHub for structured data / JSON-LD.
- [x] `author.linkedin` — added (`claudiavmbrito`); now shows in the sidebar icons.
- [ ] `google_site_verification` — **deferred** by choice. Add the token later from
  [Search Console](https://search.google.com/search-console) (one-line change at the
  `google_site_verification` key in `_config.yml`).
- [x] Scholar + ORCID already render in the sidebar (verified configured).
- [x] **Template bug fixes found while testing:** (1) `_includes/seo.html` only emitted
  `og:image` for pages with a `header.image`, so `site.og_image` never reached link
  previews — added a `site.og_image` fallback. (2) The homepage `og:description` was
  "About me" (from `about.md`'s `excerpt`) — added a real `description` to
  `about.md` front matter. Both verified in the built HTML.

**Verified:** `bundle install` + `jekyll build` run clean (Ruby 3.4 via Homebrew);
all nav pages + poster pages return HTTP 200 on a local serve.

## Phase 3 — Light visual rebrand

Goal: stop looking like the default Minimal Mistakes gray template.

- [ ] **Pick an accent color** to replace `$primary-color: #7a8288` (gray) and the
  generic `$info-color: #063c72`. Edit `_sass/_variables.scss:62` (+ links/buttons).
  Suggest one accent tied to identity (a teal/indigo/burgundy), used for links,
  buttons, and section rules.
- [ ] **Typography pass** in `_sass/_variables.scss:16-33` — choose a distinctive
  heading font (e.g. a Google-hosted serif/grotesk) while keeping a clean body font.
  Wire the font import in `_includes/head.html`.
- [ ] **Dark mode toggle** — `_sass/_themes.scss` already exists; add a light/dark
  toggle in the masthead and a `prefers-color-scheme` default.
- [ ] **Homepage polish** (`_pages/about.md`): add a short **"News / Recent"** block
  at the top (3–5 dated bullets: papers accepted, talks, awards) — standard for
  active researchers and keeps the landing page fresh.
- [ ] **Author sidebar** (`_includes/author-profile.html`) — tighten bio, confirm
  avatar + social icons look right with the new accent color.
- [ ] **Favicon / touch icons** — confirm a real favicon is set (not the template default).

## Phase 4 — Content workflow & polish

- [ ] **Publications maintenance** — decide between (a) keep the hand-edited
  `_pages/publications.md`, or (b) regenerate from BibTeX/TSV using the existing
  `markdown_generator/` tooling. Pick one and document it in the README.
- [ ] **Verify image pipeline** — `imagemagick`/WebP is enabled in `_config.yml:359`;
  confirm `bundle exec jekyll build` actually produces the responsive images, or
  disable it if unused (it needs ImageMagick installed locally).
- [ ] **Local build check** — `bundle install && bundle exec jekyll serve` runs clean
  with no warnings before pushing.
- [ ] **Link check** — verify PDF links under `/files/` and external DOIs resolve.

---

## Notes

- **Platform decision:** staying on academicpages/Jekyll. Content is portable, free
  on GitHub Pages, and already well-populated. A full migration (al-folio / Astro /
  Next.js) was considered and rejected for now — not worth re-porting all content
  unless a specific must-have feature emerges.
- **Branding recommendation:** the content is current and strong; what dates the site
  is the stock template look. The light restyle in Phase 3 delivers most of the
  visual impact for a fraction of a redesign's effort.
