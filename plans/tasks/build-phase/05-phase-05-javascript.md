# Phase 5: JavaScript Interactions

Implement all JS functionality in `components/script.js`: scroll effects, animations, mobile menu, typewriter.

## Tasks

### 5.1 Intersection Observer — Section Reveal
- Create an `IntersectionObserver` with `threshold: 0.15` and `rootMargin: '0px 0px -50px 0px'`
- Target all `.section` elements
- On intersection: add class `.visible` which triggers CSS `fadeInUp` animation
- On sections with `[data-stagger]` attribute, also add `.staggered` class to enable delayed child animations

### 5.2 Navbar Scroll Effects
- Listen to `scroll` event (with passive listener)
- Get hero section height: `document.getElementById('home').offsetHeight`
- If `scrollY > heroHeight - 100`:
  - Add `.scrolled` class to navbar, remove `.transparent`
  - Else: remove `.scrolled`, add `.transparent`
- Debounce or use throttled requestAnimationFrame for performance

### 5.3 Active Nav Link Highlighting
- On scroll, determine which section is in view using `getBoundingClientRect()`
- Loop through all sections and find the one whose top is closest to the viewport top (or within a threshold)
- Add `.active` class to corresponding nav link, remove from others
- Run this on scroll and on page load

### 5.4 Mobile Hamburger Toggle
- Select `.nav-toggle` and `.nav-links`
- On click: toggle `.active` class on both elements
- Animate hamburger bars into X shape via CSS (top/bottom bars rotate, middle bar fades)
- On link click inside mobile menu: close menu (remove `.active`)

### 5.5 Typewriter Effect
- Target `#typewriter` element
- Configure array of phrases: e.g., `['Web Developer', 'Graphic Designer', 'Media Editor']`
- Typing speed: `100ms` per character
- Deleting speed: `50ms` per character
- Pause after full text: `2000ms`
- Pause after delete: `500ms`
- Loop infinitely
- Use `requestAnimationFrame` or `setInterval` for smooth character-by-character rendering

### 5.6 Gradient Animation Trigger
- If using CSS `@keyframes gradientShift`, ensure the relevant elements have the animation class applied
- Optionally: dynamically change gradient angle or position based on mouse movement for hero section (parallax gradient effect)

## Acceptance Criteria
- [ ] Sections animate in (fade + slide up) when scrolled into view, only once
- [ ] Staggered sections reveal children with sequential delays
- [ ] Navbar starts transparent (`navbar.transparent`) and becomes `.scrolled` after scrolling past hero
- [ ] Navbar background transition is smooth
- [ ] Active nav link updates as user scrolls through sections
- [ ] Hamburger menu toggles open/closed on mobile
- [ ] Hamburger animates to X when open, back to bars when closed
- [ ] Clicking a nav link on mobile closes the menu
- [ ] Typewriter cycles through all phrases continuously
- [ ] Typewriter has correct typing speed and pause durations
- [ ] No console errors on page load
- [ ] All event listeners are passive where appropriate
