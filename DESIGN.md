# Portfolio Design System — Modern Professional

## Design Philosophy

Clean, modern, and professional. A light airy palette with vibrant yellow-orange accents creates an inviting, warm atmosphere tailored to captivate employers. Typography is driven by Poppins for all UI elements and Outfit (sans-serif) for headings — ensuring clarity, readability, and a contemporary feel. Every section uses subtle shadows, generous spacing, and smooth transitions to convey polish and attention to detail. A light/dark mode toggle lets users choose their preferred viewing experience.

---

## 1. Visual Identity

### Color Palette — Light Mode (Default)

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#faf8f6` | Page background (warm off-white) |
| `--bg-secondary` | `#f3efe9` | Section alt background |
| `--surface-primary` | `#ffffff` | Cards, elevated surfaces |
| `--surface-secondary` | `#f8f5f0` | Image placeholders, muted surfaces |
| `--accent` | `#f59e0b` | Primary yellow-orange accent |
| `--accent-rgb` | `245, 158, 11` | RGB for alpha operations |
| `--accent-deep` | `#d97706` | Deeper yellow-orange (hover states) |
| `--accent-light` | `#fef3c7` | Light yellow-orange tint |
| `--text-primary` | `#0f172a` | Dark navy headings |
| `--text-secondary` | `#475569` | Slate body copy |
| `--text-muted` | `#94a3b8` | Muted metadata text |
| `--border-color` | `rgba(0, 0, 0, 0.08)` | Subtle borders |
| `--border-hover` | `rgba(245, 158, 11, 0.2)` | Brighter border on hover |

### Color Palette — Dark Mode

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0b1120` | Deep navy page background |
| `--bg-secondary` | `#111827` | Section alt background |
| `--surface-primary` | `#1e293b` | Cards, elevated surfaces |
| `--surface-secondary` | `#1e293b` | Image placeholders |
| `--accent` | `#fbbf24` | Light yellow-orange accent |
| `--accent-rgb` | `251, 191, 36` | RGB for alpha operations |
| `--accent-deep` | `#f59e0b` | Deeper yellow-orange |
| `--accent-light` | `#451a03` | Dark yellow-orange tint |
| `--text-primary` | `#f1f5f9` | Light headings |
| `--text-secondary` | `#94a3b8` | Slate body copy |
| `--text-muted` | `#64748b` | Muted metadata text |
| `--border-color` | `rgba(255, 255, 255, 0.08)` | Subtle borders |
| `--border-hover` | `rgba(251, 191, 36, 0.3)` | Brighter border on hover |

### Theme Toggle

A circular button in the navbar toggles between light and dark mode. The icon switches between a sun (light mode) and moon (dark mode) SVG. Preference is persisted in `localStorage`.

### Shadow Tokens

| Token | Light | Dark |
|---|---|---|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | `0 2px 8px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 8px 32px rgba(0,0,0,0.08)` | `0 8px 32px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.1)` | `0 16px 48px rgba(0,0,0,0.5)` |

### Radius Tokens

| Token | Value |
|---|---|
| `--radius-sm` | `8px` |
| `--radius-md` | `16px` |
| `--radius-lg` | `24px` |
| `--radius-profile` | `24px` |
| `--grid-size` | `50px` |

### Adding Colors

Add new tokens to `:root` and `[data-theme="dark"]` in `style.css`. Use semantic names (e.g. `--color-success`, `--color-warning`) for functional colors. Both themes must have matching tokens. Avoid hardcoding hex values outside the variable block.

---

## 2. Typography

| Scale | Weight | Style | Usage |
|---|---|---|---|---|
| `5rem` → `2.8rem` | 800 | Outfit | Hero name (dark navy / light) — gradient text, glow on hover |
| `1.25rem` | 400 | Poppins | Hero subtitle prefix ("I'm a") |
| `1.6rem` | 700 | Outfit | Typewriter text — bold, with text-shadow glow |
| `2.5rem` → `1.6rem` | 700 | Outfit | Section headings |
| `1.2rem` → `1rem` | 600 | Outfit | Card headings |
| `1.5rem` | 600 | Outfit | Timeline card headings — 3x upscaled |
| `1rem` | 400 | Poppins | Body copy, card text |
| `0.85rem` | 600 | Poppins uppercase | Section subtitle labels |
| `0.8rem` | 400 | Poppins | Footer, metadata |

- **Heading font:** `'Outfit', sans-serif` (`--font-heading`) — clean modern geometric sans
- **Body font:** `'Poppins', sans-serif` (`--font-body`) — refined geometric sans
- Hero name is bold (800 weight) with tight letter-spacing (-0.03em)
- Each section has a small uppercase subtitle label above the heading (`.section-subtitle`) in the accent color
- Section headings paired with a gradient accent horizontal rule (`.section-rule`, 60px wide, 3px height, `linear-gradient` from accent to accent-light)
- Text selection uses yellow-orange accent background with white text

---

## 3. Texture & Effects

### Shadows

Card and surface shadows are subtle yet present, using the `--shadow-*` tokens. On dark mode, shadows deepen for contrast.

### Glassmorphism

Used on the scrolled navbar:
```css
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border-color);
}
```

In dark mode, the background shifts to `rgba(11, 17, 32, 0.92)`.

### Gradient Accents

- Section rules use a `linear-gradient(90deg, var(--accent), var(--accent-light))` for a refined modern look.
- About accent panel uses a radial gradient with the accent color at low opacity.

### Grid Background

A fixed-position grid pattern overlays the page using `linear-gradient` lines at `50px` intervals. The grid animates infinitely by shifting its `background-position` over 30 seconds. On body hover, the grid line opacity increases from 0.04 to 0.12, creating a subtle glow effect across the entire page.

```css
body::before {
  background-image:
    linear-gradient(rgba(var(--accent-rgb), 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--accent-rgb), 0.04) 1px, transparent 1px);
  animation: gridShift 30s linear infinite;
}
body:hover::before {
  background-image:
    linear-gradient(rgba(var(--accent-rgb), 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(var(--accent-rgb), 0.12) 1px, transparent 1px);
}
```

### Contact Glow

A pulsing radial gradient orb behind the contact card breathes gently (6s loop) using the accent color at 8% opacity.

---

## 4. Spacing & Layout

### Section Padding

| Breakpoint | Padding |
|---|---|
| Desktop (≥1024px) | `120px 32px` |
| Tablet (768–1023px) | `80px 24px` |
| Mobile (<768px) | `60px 16px` |

### Max Content Width

`1360px` — centered with `margin: 0 auto`. Increased from 1200px to accommodate the 2x upscaled hero profile image alongside content.

### Hero Layout

| Element | Position |
|---|---|
| Hero content (name, subtitle, buttons) | Left column — flex: 1 |
| Profile image | Right column — flex-shrink: 0 |

On tablet/mobile, the hero collapses to a centered column layout with the image above the content.

### Grid Patterns

| Component | Columns | Gap |
|---|---|---|---|
| Expertise grid | 3 → 1 (mobile) | `24px` |
| Services grid | 2 → 1 (mobile) | `24px` |
| Projects grid | 3 → 1 (mobile) | `24px` |
| Certificates grid | 3 → 1 (mobile) | `24px` |
| About grid | 1.2fr / 0.8fr → 1fr (mobile) | `60px → 24px` |

### Stacking Context

- Navbar: `z-index: 1000`
- Project overlays: absolute within `.project-card`
- Timeline dots: `z-index: 1` above the timeline line

---

## 5. Components

### Navbar (`.navbar`)
- Fixed top, full width, `min-height: 68px`, horizontal padding `0 32px`
- Transparent on hero with no border
- On scroll: light background with blur (`rgba(255,255,255,0.92)`) + `backdrop-filter: blur(24px)` + subtle bottom border + shadow
- Brand: "Kurt" in Outfit (800 weight), blue accent color
- Nav links: Poppins, uppercase, `0.06em` letter-spacing, slate → blue accent on hover/active (Home, About, Expertise, Education, Services, Certificates, Projects, Contact)
- Underline slide effect (2px blue line) on hover/active
- Theme toggle button (circular, 38px) at the far right, toggles between sun/moon SVG icons
- Mobile: hamburger toggle reveals vertical dropdown menu

### Theme Toggle (`.theme-toggle`)
- Circular button, 38px, with border and light surface background
- Sun SVG icon visible in light mode, Moon SVG visible in dark mode
- Hover: accent border color + glow effect + slight lift
- Persists preference in `localStorage`

### Section Header (`.section-header`)
```
.section-subtitle (uppercase, blue, 0.25em letter-spacing, 600 weight)
h2 (Outfit, 2.5rem)
.section-rule (60px × 3px blue gradient line)
```

Applied consistently across all content sections (About, Expertise, Education, Services, Certificates, Projects, Contact).

### Profile Image (`.profile-img-wrapper`)
- Rounded square (`border-radius: 24px`), 600px (→ 480px tablet → 360px mobile) — 2x upscaled for greater visual impact
- Positioned on the right side of the hero section, with content on the left
- Double-ring frame: inner `2px` border at 4px offset, outer `1px` subtle ring at 10px offset
- On hover: inner ring brightens to full accent + soft glow shadow; image scales up 6%
- Frame colors adapt to both light and dark modes

### Cards (`.expertise-card`, `.service-card`, `.project-card`)
- Background: `var(--surface-primary)` (white in light, dark slate in dark mode)
- Border: `1px solid var(--border-color)`
- Border radius: `var(--radius-md)` (16px)
- Padding: `32px` (→ `24px` on mobile)
- Hover: `translateY(-6px)` + accent-tinted border + shadow + subtle 1px inner glow
- Each card has a `.card-icon` — small bordered square container with geometric symbol, transitions to accent on hover

### Certificates (`.cert-card`)
- 3-column grid (`.cert-grid`, collapses to 1 column on tablet/mobile), 24px gap
- Card uses `var(--surface-primary)` background, 1px border, `var(--radius-md)` (16px) radius
- `.cert-image`: aspect-ratio `4/3`, image fills with `object-fit: cover`, scales 6% on card hover
- `.cert-info`: padding `20px 24px 24px`, contains `.cert-badge` label and `<h3>` title
- `.cert-badge`: small uppercase "Certificate" label in accent color with tinted background and border
- Card hover: `translateY(-6px)` + accent-tinted border + `shadow-md`, matching expertise/service/project card pattern
- Clicking a card opens the modal viewer

### Modal (`.modal-overlay`)
- Fixed overlay (`z-index: 2000`) with dark semi-transparent background (`rgba(0,0,0,0.75)`) and `backdrop-filter: blur(8px)`
- Fades in/out via opacity + visibility transitions (0.3s)
- `.modal-container`: white surface card, max-width 900px, max-height 90vh, slight scale-up entrance animation (0.35s)
- `.modal-header`: flex row with title (truncated with ellipsis) and control buttons group, separated by bottom border
- `.modal-controls`: aligned group of icon buttons for zoom-in (+), zoom-out (−), reset (↺), and close (✕)
- `.modal-btn`: 36px icon buttons with hover accent color transition; close button turns red on hover
- `.modal-body`: scrollable area with `overflow: auto`; centers image, `cursor: grab` / `:active` grabbing
- Image uses `transform: scale(N)` applied via JS, smoothly transitioned (0.2s ease), bounded between `0.5x–4x`
- Keyboard: `Escape` closes modal
- Body overflow hidden while modal is open (prevents background scroll)

### Decorative Elements
- **About section:** Decorative ampersand (`&`) in Outfit, 8rem, accent at 10% opacity, positioned bottom-right of the accent panel
- **About accent panel:** Subtle gradient background using accent at low opacity, decorative circle elements via `::before` and `::after` pseudo-elements
- **Section rules:** Blue gradient horizontal lines (60px × 3px) below each section heading
- **Project image placeholders:** Diagonal line pattern using `repeating-linear-gradient` with subtle accent tint (default). Individual projects can override with dedicated images — e.g. SIS card uses `sis-bg.png` via `.project-image.sis` with `background-size: cover`

### Buttons
- **Social button (`.social-btn`):** Outlined pill with subtle border, blue accent on hover, subtle lift (`translateY(-2px)`), soft glow shadow. Text is bold, sans-serif, with increased padding and font-size for prominence.
- **CTA button (`.contact-btn`):** Solid blue filled pill with deeper blue on hover, lift + blue shadow on hover
- **Project button (`.project-btn`):** Solid blue filled pill, deeper blue on hover

### Typewriter (`.typewriter`)
- Lives inside `.hero-subtitle` after the static "I'm a" text
- Cycles through `WEB DEVELOPER`, `CREATIVE DESIGNER`, and `MEDIA EDITOR`
- Types character-by-character (100ms), pauses 2s, deletes (50ms), then moves to next phrase
- Blinking cursor (`|`) uses `cursorBlink` animation in accent color
- Font-size increased to 1.6rem, bold weight (700), with text-shadow glow using accent color

### Timeline (`.timeline`)
- Vertical 2px gradient line centered on desktop (fades to transparent at top/bottom, blue accent)
- Alternating left/right cards connected by dots — **3x upscaled** for prominence
- Cards: `48px` padding, `max-width: 640px`, heading at `1.5rem`, school at `1.05rem`, year at `0.9rem`
- Dots: `20px` diameter with `4px` border, scale up `1.5x` on hover
- Card hover: `translateY(-6px)` + accent border + `shadow-md`
- On mobile: line shifts to far left (~7px), all cards left-aligned with left padding

### Contact Card (`.contact-card`)
- White surface card with shadow and border, centered, max-width 600px
- Section header centered (rule centered via browser default)
- Decorative breathing glow orb in background (`.contact-glow`) — radial gradient that scales up/down on a 6s loop
- CTA button with solid fill (contrasts well on white card)

### Overlays
- Project cards: blue overlay (`rgba(var(--accent-rgb), 0.9)`) with action button, revealed on hover

### Footer
- Clean minimal footer with `border-top: 1px solid var(--border-color)`
- Copyright text in muted color
- Smaller social buttons

---

## 6. Motion & Animation

### Scroll Reveal

Sections use Intersection Observer. When visible, add `.visible` class:
- Fade-in + slide-up (`transform: translateY(40px) → translateY(0)`, `opacity: 0 → 1`)
- Transition: `0.7s ease`

### Staggered Children

Elements with `[data-stagger]` animate children sequentially with `slideUp` keyframe:
- Each child gets an increasing `animation-delay` (0.1s steps, starting at 0.1s)
- Triggered by adding `.visible` or `.staggered` class
- Animation: `translateY(24px)` → `translateY(0)`, `opacity: 0 → 1`, `0.6s ease`

### Name Hover Effect
- The hero name (`hero-name`) uses a 3-stop gradient (`text-primary → accent → accent-deep`) with `background-size: 200% 200%`
- On hover, `background-position` slides from `0% 50%` to `100% 50%`, creating a smooth animated gradient shift
- A glowing text-shadow fades in on hover for a luminous effect
- Transition: `background-position 0.5s ease, text-shadow 0.5s ease`

### Keyframe Animations

| Name | Duration | Purpose |
|---|---|---|
| `fadeInUp` | — | Scroll entry (opacity + translateY) |
| `fadeInLeft` | — | Scroll entry (opacity + translateX) |
| `fadeInRight` | — | Scroll entry (opacity + translateX) |
| `slideUp` | 0.6s | Staggered card entry |
| `cursorBlink` | 1s | Typewriter cursor (accent) |
| `glowBreathe` | 6s | Contact glow orb scale pulse |
| `gridShift` | 30s | Grid background position shift |

### Hover Effects
- Hero name: gradient position slide + text-shadow glow (0.5s ease)
- Cards: `translateY(-6px)` + accent border + shadow (0.4s ease)
- Buttons: `translateY(-2px)` + glow (0.35s ease)
- Nav links: underline slide (`width: 0 → 100%`, 0.35s ease)
- Profile image: ring brightens + image scale(1.06) (0.4s–0.5s ease)
- Card icons: border + background transition to accent (0.35s ease)
- Timeline cards: `translateY(-6px)` + accent border + `shadow-md` (0.3s ease)
- Timeline dots: scale(1.5) (0.3s ease)
- Theme toggle: accent border + glow + lift (0.35s ease)

### Theme Transition
- Body background and text colors transition at 0.3s ease for smooth theme switching

---

## 7. Responsive Behavior

### Breakpoints

| Name | Range | Key changes |
|---|---|---|---|
| Desktop | ≥1024px | Full layout (hero row, image right), centered timeline, decorative ampersand at 8rem |
| Tablet | 768–1023px | Single column grids, hamburger nav, hero collapses to column (image on top), smaller hero text (3.2rem→2.8rem), profile image 480px, timeline linear left-aligned, smaller decorative elements |
| Mobile | <768px | Further reduced sizes (hero 2.8rem, heading 1.6rem), profile image 360px, tighter padding, ampersand at 3.5rem, subtitle at 1.05rem |

### Pattern

All grids collapse to single-column below 1024px. Timeline switches from alternating to left-linear. Padding and font sizes scale down progressively. The decorative ampersand remains visible but scales down proportionally.

---

## 8. Naming Conventions

| Context | Convention | Example |
|---|---|---|
| CSS classes | kebab-case | `.profile-img-wrapper`, `.contact-card` |
| HTML IDs | camelCase | `#typewriter` |
| Section IDs | kebab-case | `#expertise`, `#education` |
| CSS custom properties | kebab-case with `--` prefix | `--accent-deep` |
| Data attributes | kebab-case | `data-stagger`, `data-theme` |
| JS variables | camelCase | `currentSection`, `navLinks` |

---

## 9. Adding New Components

1. Add design tokens to `:root` (light) and `[data-theme="dark"]` (dark) if new colors/values are introduced.
2. Create CSS following the existing patterns (kebab-case classes, CSS custom properties, dual-theme support).
3. Use existing utility classes (`.glass`, `.social-btn`, `.card-icon`, `.section-header`) when applicable.
4. Add animation classes and keyframes following the motion system.
5. Include responsive overrides in the appropriate media query blocks.
6. Wire up Intersection Observer or scroll effects in `script.js` using the established patterns.

---

## 10. Future-Proofing Notes

- If the project adopts a framework (React, Next.js, Vue), migrate CSS custom properties to JS theme tokens while preserving the same semantic names.
- If Tailwind is added, map tokens to `tailwind.config` `theme.extend.colors` using the same names — ensure both light and dark tokens are mapped.
- If component styles need scoping, consider CSS Modules or a CSS-in-JS library — but keep the global design tokens in one place.
- For icons, consider replacing the current geometric Unicode symbols with an SVG sprite system or icon library (Lucide, Phosphor).
- The theme toggle uses `data-theme` on `<html>` — any framework migration should preserve this attribute-based theming approach for consistency.
