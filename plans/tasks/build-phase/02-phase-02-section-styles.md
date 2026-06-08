# Phase 2: Section-Specific CSS Styles

Implement CSS for every section: Navbar, Hero, About, Expertise, Education, Services, Projects, Contact, Footer.

## Tasks

### 2.1 Navbar
- `.navbar`: `position: fixed`, `top: 0`, `width: 100%`, `z-index: 1000`
- `.navbar.glass`: glassmorphism background (uses `.glass` class)
- `.navbar.transparent`: transparent background when at top of hero
- `.navbar.scrolled`: solid glass background after scrolling past hero
- Nav links: white text, hover transitions to gradient color with underline slide animation (`::after` width transition)
- Mobile hamburger: hidden on desktop (`.nav-toggle` button with three span bars)

### 2.2 Hero Section
- `#home`: `min-height: 100vh`, `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`, text centering
- Profile image container: circular mask, `width: 200px`, `height: 200px`, with animated glowing ring border (uses `box-shadow` with gradient animation)
- Name: uses hero typography from Phase 1
- Subtitle: styled for typewriter effect (monospace font fallback, blinking cursor via `border-right`)
- Social buttons: `background: transparent`, `border: 1px solid var(--accent-start)`, `color: var(--text-primary)`, `border-radius: 50px`, `padding: 12px 28px`, hover neon glow effect (`box-shadow: 0 0 20px var(--accent-start)`)
- Background: subtle animated gradient or particle canvas behind content

### 2.3 About Section
- `#about`: `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 60px`
- Left column: text content with left accent bar (`::before` with gradient, `width: 4px`, full height)
- Right column: decorative accent block (gradient shape or placeholder)
- Staggered fade-in support via data attributes

### 2.4 Expertise Section
- `#expertise`: card grid, `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: 24px`
- Card: `.expertise-card` with icon area, title, description
- Hover: `transform: translateY(-8px)`, glowing border effect (`box-shadow` with accent color)

### 2.5 Education Section
- `#education`: vertical timeline layout, centered
- Timeline line: `position: absolute`, `width: 2px`, gradient background, centered horizontally
- Timeline dots: `width: 16px`, `height: 16px`, `border-radius: 50%`, gradient fill, centered on line
- Cards alternate left/right of the timeline dot
- Responsive: stack cards on mobile

### 2.6 Services Section
- `#services`: `display: grid`, `grid-template-columns: repeat(2, 1fr)`, `gap: 24px`
- Cards: glassmorphism style (`.glass`), `padding: 40px`, `text-align: center`
- Hover: `transform: scale(1.03)`, gradient border reveal via `::before` overlay

### 2.7 Projects Section
- `#projects`: `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `gap: 24px`
- Card: `.project-card` with gradient placeholder image area, title, description
- Image area: `aspect-ratio: 16/9`, gradient background using `var(--accent-gradient)` with reduced opacity
- Hover overlay: semi-transparent dark overlay with "View Project" pill button appearing on hover
- "View Project" button: pill style, gradient background, white text

### 2.8 Contact Section
- `#contact`: centered single-column layout
- Contact card: `.glass`, `max-width: 600px`, `margin: 0 auto`, gradient border via `border-image` or `::before`, `padding: 60px`
- Email link: pill button with gradient background, icon (use Unicode or SVG), `font-size: 1.2rem`
- Decorative background glow: `position: absolute`, large blurred gradient circle behind card

### 2.9 Footer
- `footer`: `background: #050505`, `padding: 40px 24px`, `text-align: center`
- Copyright text: `color: var(--text-secondary)`, small font
- Social icon links: inline list, `font-size: 1.5rem`, hover color shift to accent

## Acceptance Criteria
- [ ] Navbar is fixed at top, transparent on hero, solid glass after scrolling
- [ ] Hero section is full viewport height with centered layout
- [ ] Social buttons have neon glow on hover
- [ ] About is two-column grid with decorative accent block
- [ ] Expertise cards float upward on hover with glow
- [ ] Education timeline with alternating cards and central line + dots
- [ ] Services cards scale up with gradient border on hover
- [ ] Projects grid shows overlay with "View Project" button on hover
- [ ] Contact card has gradient border and decorative glow
- [ ] Footer has dark background with centered copyright and icon links
