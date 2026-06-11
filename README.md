# claudiavmbrito.github.io

Personal academic website of **Cláudia Brito** — Assistant Researcher at
[INESC TEC / HASLab](https://www.inesctec.pt/en) and Invited Assistant Professor at
the [University of Minho](https://www.uminho.pt/EN). Research focus: AI for Systems
and Systems for AI.

Live at **[claudiavmbrito.github.io](https://claudiavmbrito.github.io)**.

Built with [Jekyll](https://jekyllrb.com/) on the
[academicpages](https://academicpages.github.io/) template (a fork of the
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme) and served
via GitHub Pages.

## Structure

| Path | Contents |
| --- | --- |
| `_pages/` | Top-level pages (about, publications, teaching, supervision, service, projects, talks, awards, cv) |
| `_tryouts/` | Conference **posters** (rendered in the Posters section of the Talks page) |
| `_data/navigation.yml` | Main navigation menu |
| `_config.yml` | Site-wide configuration |
| `_sass/`, `assets/css/` | Styles |
| `_includes/`, `_layouts/` | Theme templates |
| `files/` | PDFs and other downloads, served at `/files/...` |
| `images/` | Site images |

## Editing content

- **Publications / Talks / Teaching / etc.** — edit the corresponding file in
  `_pages/` directly (they are hand-maintained Markdown).
- **Posters** — add a Markdown file to `_tryouts/` (see existing entries for the
  front matter: `title`, `description`, `img`, `importance`, `category`).
- **Navigation** — edit `_data/navigation.yml`.

## Run locally

Requires Ruby + Bundler (and ImageMagick if you keep the responsive-image pipeline
enabled in `_config.yml`).

```sh
bundle install
bundle exec jekyll serve
```

The site builds to `_site/` and serves at `http://localhost:4000`, rebuilding on
change. `_site/` is build output and is gitignored.

> Note: `Gemfile.lock` is gitignored — if dependency resolution errors out, delete
> any local `Gemfile.lock` and re-run `bundle install`.

## License

Theme code is © Michael Rose and released under the MIT License (see `LICENSE`).
Site content (text, publications, images) © Cláudia Brito.
