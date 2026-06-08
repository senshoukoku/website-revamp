# Phase 1: CSS Foundation

Set up the core CSS architecture: design tokens, reset, typography, and utility classes.

## Tasks

### 1.1 Define CSS Custom Properties
- Define `:root` variables in `src/style.css`:
  - `--bg-primary: #0a0a0a`
  - `--bg-secondary: #121212`
  - `--surface-primary: #1a1a1a`
  - `--surface-secondary: #222222`
  - `--accent-gradient: linear-gradient(135deg, #00d4ff, #7b2ffc)`
  - `--accent-start: #00d4ff`
  - `--accent-end: #7b2ffc`
  - `--text-primary: #ffffff`
  - `--text-secondary: #aaaaaa`
  - `--border-color: rgba(255, 255, 255, 0.08)`
  - `--glass-bg: rgba(10, 10, 10, 0.8)`
  - `--glass-blur: blur(20px)`
  - `--font-base: 'Poppins', sans-serif`

### 1.2 CSS Reset & Base
- Keep existing `* { margin: 0; padding: 0; box-sizing: border-box }`
- Set `font-family: var(--font-base)`
- Set `scroll-behavior: smooth`
- Set `background-color: var(--bg-primary)` on `body`
- Set `color: var(--text-primary)` on `body`

### 1.3 Typography Styles
- **Hero name**: `font-size: 4rem`, `font-weight: 800`, gradient text fill using `background-clip: text` with `var(--accent-gradient)`
- **Section headings**: `text-transform: uppercase`, `font-size: 1.5rem`, `letter-spacing: 2px`, gradient underline accent via `::after` pseudo-element
- **Body text**: `font-weight: 300`, `font-size: 1rem`, `color: var(--text-secondary)`

### 1.4 Glassmorphism Utility
- Define a reusable `.glass` class:
  - `background: var(--glass-bg)`
  - `backdrop-filter: var(--glass-blur)`
  - `border: 1px solid var(--border-color)`
  - `border-radius: 12px`

### 1.5 Section Spacing
- `.section`: `padding: 100px 24px`, `max-width: 1200px`, `margin: 0 auto`

## Acceptance Criteria
- [ ] All CSS custom properties defined in `:root` and used throughout
- [ ] Body renders with dark background (`#0a0a0a`) and white text
- [ ] Hero name renders with gradient fill text
- [ ] Section headings are uppercase with letter-spacing and gradient underline
- [ ] `.glass` class produces visible glassmorphism effect
- [ ] Sections have consistent horizontal centering and vertical padding
- [ ] Existing styles are refactored to use custom properties (no hardcoded color values remain)
