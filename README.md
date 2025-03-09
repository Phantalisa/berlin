# Mädchen*treff Friedrichshain Berlin

This is the website for Mädchen*treff Friedrichshain Berlin, a space for MINTA* and young FLINTA* in Berlin.

## About This Site

This site uses Jekyll, a static site generator, which makes it easy to maintain and deploy to GitHub Pages.

## Development Setup

### Prerequisites

- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

### Local Development

1. Install Jekyll and Bundler gems:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/maedchentreff.git
   cd maedchentreff
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the development server:
   ```
   bundle exec jekyll serve
   ```

5. View the site at http://localhost:4000

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Project Structure

- `_includes/`: Reusable components (header, footer, etc.)
- `_layouts/`: Page templates
- `_sass/`: SCSS partials
- `assets/`: Static assets (images, CSS, JS)
- `*.html`, `*.md`: Content pages
