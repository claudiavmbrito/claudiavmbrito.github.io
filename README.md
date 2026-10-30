# claudiavmbrito.github.io

Personal academic website of **Cláudia Brito** — Assistant Researcher at
[INESC TEC / HASLab](https://www.inesctec.pt/en) and Invited Assistant Professor at
the [University of Minho](https://www.uminho.pt/EN). Research focus: AI for Systems
and Systems for AI.

Live at **[claudiavmbrito.github.io](https://claudiavmbrito.github.io)**.

Built with [Jekyll](https://jekyllrb.com/) and served via GitHub Pages, using a
small custom theme (al-folio-style layout, self-hosted fonts and icons).

## Structure

| Path | Contents |
| --- | --- |
| `_pages/` | Pages (about, publications, projects, supervision, teaching, talks, service, experience, awards) |
| `_data/publications.yml` | All publications; rendered on `/publications/` and, for the newest year, on the home page |
| `_data/news.yml` | News items on the home page |
| `_data/navigation.yml` | Top bar menu |
| `_data/social.yml` | Profile links (home page and footer) |
| `_tryouts/` | Conference posters, shown in the Posters section of the Talks page |
| `_includes/recruiting.html` | The "not recruiting" notice (home and Supervision) |
| `_layouts/`, `_includes/`, `assets/` | Theme: layouts, CSS, script, fonts, icon sprite |
| `files/` | PDFs and BibTeX files, served at `/files/...` |
| `images/` | Portrait and favicons |

## Editing content

- **New paper**: add an entry at the top of its year in `_data/publications.yml`
  (`type`, `year`, `abbr`, `title`, `authors`, `venue`, and optional `pdf`, `doi`, `code`,
  `slides`, `bibtex`). Put PDFs and `.bib` files under `files/`. Mark yourself as `**Brito, C.**`.
- **News**: add an item at the top of `_data/news.yml` (Markdown text).
- **Other pages**: edit the Markdown in `_pages/`.
- **Posters**: add a Markdown file to `_tryouts/` (front matter: `title`, `description`,
  `img`, `importance`).

## Run locally

Requires Ruby and Bundler.

```sh
bundle install
bundle exec jekyll serve
```

The site builds to `_site/` and serves at `http://localhost:4000`, rebuilding on
change. `_site/` is build output and is gitignored.

> Note: `Gemfile.lock` is gitignored — if dependency resolution errors out, delete
> any local `Gemfile.lock` and re-run `bundle install`.

## License

`_includes/seo.html` comes from Minimal Mistakes, © Michael Rose, MIT License (see `LICENSE`).
Site content (text, publications, images) © Cláudia Brito.
