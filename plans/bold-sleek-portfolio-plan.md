# Bold & Sleek Portfolio — Implementation Plan

## Current State
Minimal HTML-only portfolio, ~62 lines CSS. No dark mode, no animations, no responsive design, no JS functionality. Profile image exists but unused.

## Design Goals
- **Bold:** Dark theme, large typography, gradient accents, strong contrast
- **Sleek:** Glassmorphism, smooth animations, clean layouts, modern polish

---

## 1. Color Palette
| Token | Value |
|-------|-------|
| Background | `#0a0a0a` / `#121212` |
| Surface | `#1a1a1a` / `#222` |
| Accent gradient | `#00d4ff` → `#7b2ffc` |
| Primary text | `#ffffff` |
| Secondary text | `#aaaaaa` |
| Border | `rgba(255,255,255,0.08)` |

## 2. Typography
- Base: Poppins (already imported)
- Hero name: 4rem, 800 weight, gradient text fill
- Section headings: uppercase, `1.5rem`, letter-spaced 2px, gradient underline accent
- Body: 300 weight, `1rem`, `#ccc`

## 3. Per-Section Redesign

### Navbar
- Fixed top, glassmorphism: `background: rgba(10,10,10,0.8); backdrop-filter: blur(20px)`
- Transparent on hero, gains solid background on scroll
- Nav links: white → accent gradient on hover with underline slide
- Mobile: hamburger toggle

### Home / Hero
- Full viewport height, centered flex column
- Profile image: circular, 200px, glowing ring border (animated)
- Name: gradient text fill, large
- Subtitle: typewriter effect via JS
- Social buttons: outlined with neon hover glow
- Background: subtle animated gradient or particle effect

### About
- Two-column: text left, decorative accent block right
- Left accent bar (gradient)
- Staggered fade-in on scroll

### Expertise
- 3x2 card grid
- Each card: icon, title, description
- Hover: translateY(-8px) + glowing border
- Optional: skill progress bars

### Education
- Vertical timeline with central line
- Alternating left/right cards
- Connected dots on timeline

### Services
- 2x2 glassmorphism card grid
- Hover: scale(1.03) + gradient border reveal

### Projects
- 3-column card grid
- Each card: gradient placeholder image, title, overlay on hover
- "View Project" pill button

### Contact
- Centered card with gradient border
- Email link styled as pill button with icon
- Decorative background glow

### Footer
- `#050505` background
- Centered copyright + social icon links

## 4. Animations & Interactions (Intersection Observer)
- Section fade-in + slide-up on scroll
- Staggered children within sections
- Navbar shrink on scroll past hero
- Active nav link highlighting
- Gradient accent animation (slow 10s cycle)
- Hover glow on cards/buttons

## 5. Responsive Breakpoints
- Desktop (1024px+): full layout
- Tablet (768px-1023px): single column, smaller cards, hamburger nav
- Mobile (<768px): stacked, reduced fonts, full-width

## 6. JavaScript
- Intersection Observer for scroll reveals
- Navbar scroll effects
- Mobile hamburger toggle
- Active section tracking
- Typewriter effect for hero subtitle

## 7. Profile Image
- `<img src="../assets/profile.jpg">` in hero section
- Circular mask with glowing border animation

---

## Implementation Order
1. Write the complete CSS (style.css)
2. Update index.html with new structure & classes
3. Write JavaScript (script.js) for all interactions
