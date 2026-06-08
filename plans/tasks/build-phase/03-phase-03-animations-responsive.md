# Phase 3: Animations & Responsive Breakpoints

Add CSS animations, transitions, hover effects, and responsive layout rules for tablet/mobile.

## Tasks

### 3.1 Section Reveal Animations
- Define `@keyframes fadeInUp`: from `opacity: 0; transform: translateY(40px)` to `opacity: 1; transform: translateY(0)`
- Define `@keyframes fadeInLeft` and `@keyframes fadeInRight` for staggered entry
- Define `@keyframes slideUp` for individual card children

### 3.2 Navbar Transitions
- Smooth background-color transition on scroll class toggle (`transition: background 0.3s ease`)
- Nav link underline slide: `::after` with `width: 0` → `width: 100%` on hover, `transition: width 0.3s ease`

### 3.3 Gradient Accent Animation
- `@keyframes gradientShift`: cycle gradient `hue` or position over 10s
- Animate the hero background gradient or the accent underline on section headers

### 3.4 Glow & Hover Effects
- Profile image glow ring: `@keyframes glowPulse` — animate `box-shadow` between `0 0 20px var(--accent-start)` and `0 0 60px var(--accent-end)`
- Card hover: `transition: transform 0.3s ease, box-shadow 0.3s ease`
- Button hover: `transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease`

### 3.5 Responsive: Tablet (`768px`–`1023px`)
- Navbar: hamburger menu visible, nav links hidden by default
- All multi-column grids become single column:
  - About: `grid-template-columns: 1fr`
  - Expertise: `grid-template-columns: 1fr`
  - Services: `grid-template-columns: 1fr`
  - Projects: `grid-template-columns: 1fr`
- Hero name: reduce to `3rem`
- Section padding: reduce to `80px 20px`
- Education timeline: cards stack (no alternating)

### 3.6 Responsive: Mobile (`<768px`)
- Hero name: reduce to `2.5rem`
- Section headings: reduce to `1.2rem`
- Section padding: reduce to `60px 16px`
- Profile image: reduce to `150px`
- Cards: `padding: 24px`
- Timeline dots and line: scale down proportionally
- Contact card: `padding: 40px 20px`

### 3.7 Staggered Children Support
- Add CSS rule: `[data-stagger] > *` with incremental `animation-delay` using `nth-child` selectors or CSS counter
- Default: children animate in sequence with `0.1s` delay increments

## Acceptance Criteria
- [ ] Sections fade and slide up on scroll (powered by JS in Phase 5)
- [ ] Navbar background transitions smoothly on scroll
- [ ] Nav links have underline slide animation on hover
- [ ] Gradient accent animates slowly (10s cycle)
- [ ] Profile image has pulsing glow ring
- [ ] All card/button hover effects have smooth transitions
- [ ] At 768px–1023px: single column layouts, hamburger visible, reduced font sizes
- [ ] At <768px: further reduced fonts, smaller profile image, tighter padding
- [ ] Staggered children classes are defined and ready for JS activation
- [ ] No layout breakage at any breakpoint
