# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Russian-language ITDOXY blog, built with Hugo and PaperMod.

- `content/posts/`: articles, either standalone Markdown files or page bundles containing `index.md` and images.
- `content/`: top-level pages such as search, contacts, and archives; taxonomy indexes live in `categories/` and `tags/`.
- `layouts/`: site-specific Go HTML templates and partials overriding the theme.
- `static/`: assets copied directly into the generated site, including CSS, images, and favicons.
- `archetypes/default.md`: template for new content.
- `themes/PaperMod/`: Git submodule; prefer site-level overrides in `layouts/` for local customizations.
- `hugo.yml`: site configuration; `.github/workflows/main.yml`: build and deployment workflow.

## Build, Test, and Development Commands

Use Hugo Extended; CI currently pins version `0.156.0`. No npm toolchain is configured.

- `git submodule update --init --recursive`: initialize the pinned theme checkout.
- `hugo server -D`: preview locally at `http://localhost:1313`, including drafts.
- `hugo new posts/YYYY-MM-DD-topic.md`: create an article using the default archetype.
- `hugo --minify`: run the production build and generate `public/`.

Do not commit generated `public/` files.

## Coding Style & Naming Conventions

Use two-space indentation in YAML and preserve surrounding template and CSS formatting. No automated formatter or linter is configured.

Write articles in Russian with descriptive headings and language-tagged code fences. Follow the existing `YYYY-MM-DD-title.md` or `YYYY-MM-DD-title/index.md` naming patterns; Cyrillic titles are common. Include `title`, `slug`, ISO 8601 `date`, `categories`, author metadata, and `draft` status. The archetype creates TOML front matter; existing articles commonly use YAML. For bundled covers, use `cover.image` and `cover.relative: true`. Preserve published slugs because they determine article URLs.

## Testing Guidelines

There is no automated test suite or coverage requirement. Run `hugo --minify` before submitting changes and inspect affected pages with `hugo server -D`. Check images, links, search, taxonomy navigation, and mobile layouts where relevant. Drafts and future-dated posts are excluded from production builds.

## Commit & Pull Request Guidelines

Recent commits use short descriptive subjects, commonly `Add post "Article title"` or `Post metadata refactoring`. Follow that style and keep changes focused.

Open pull requests against `main`. Describe the change, link relevant issues, report build and preview checks, and include screenshots for visual changes. Pushes to `main` trigger deployment to Yandex Object Storage. Keep deployment credentials in GitHub Actions secrets.
