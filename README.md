# MÄDCHEN*TREFF FRIEDRICHSHAIN BERLIN

This is the website repository for Mädchen*treff Friedrichshain Berlin.

## Deployment with GitHub Pages

This site is configured to deploy automatically to GitHub Pages using GitHub Actions. The configuration:

1. Uses Jekyll 4.2.0 (newer than GitHub Pages' built-in Jekyll)
2. Builds the site with GitHub Actions workflow (see `.github/workflows/jekyll.yml`)
3. Deploys to GitHub Pages using the official GitHub Pages deployment action

### How it works

- The `.github/workflows/jekyll.yml` file contains the GitHub Actions workflow that:
  - Installs dependencies
  - Builds the Jekyll site
  - Uses the official GitHub Pages deployment action
  - Respects repository permissions

- The `.nojekyll` file tells GitHub not to use its built-in Jekyll processor
- The `CNAME` file ensures the custom domain (maedchentreff-berlin.de) is maintained

### Local Development

To run the site locally:

```bash
bundle install
bundle exec jekyll serve
```

Then visit `http://localhost:4000` in your browser.
