# Phase 4: HTML Restructure

Rewrite `src/index.html` with semantic structure, new CSS classes, and all section content matching the redesigned layout.

## Tasks

### 4.1 Head Updates
- Keep Poppins font import (already in CSS, remove from HTML if present)
- Ensure `<meta name="viewport">` is present
- Add `<meta name="description">` for SEO
- Update `<title>` to: `Kurt Setriani Bognot | Web Developer & Designer`
- Link `style.css` (already linked)
- Link `../components/script.js` with `defer` attribute at end of `<body>`

### 4.2 Navbar Structure
```html
<nav class="navbar glass" id="navbar">
  <div class="nav-brand">Kurt</div>
  <button class="nav-toggle" aria-label="Toggle navigation">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links">
    <li><a href="#home" class="active">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#expertise">Expertise</a></li>
    <li><a href="#education">Education</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

### 4.3 Hero Section
- `id="home"` with class `section hero`
- Profile image: `<img src="../assets/profile.jpg" alt="Kurt Setriani Bognot" class="profile-img">` with circular shape
- `<h1 class="hero-name">Kurt Setriani Bognot</h1>`
- `<p class="hero-subtitle" id="typewriter"></p>` — subtitle text will be typed by JS
- Social buttons container: `<div class="social-links">` with pill buttons for Facebook and LinkedIn using `<a>` tags with `target="_blank"`

### 4.4 About Section
- `id="about"` with class `section`
- `.about-grid` container with two children:
  - `.about-text`: paragraphs of bio text, left accent bar via class
  - `.about-accent`: decorative gradient block

### 4.5 Expertise Section
- `id="expertise"` with class `section`
- `.expertise-grid` with `.expertise-card` repeated 6 times (3x2 grid)
- Each card contains: icon (Unicode or emoji), title (`<h3>`), description (`<p>`)

### 4.6 Education Section
- `id="education"` with class `section`
- `.timeline` container with:
  - `.timeline-line`
  - `.timeline-item` for each entry (alternating `.left` / `.right`)
  - Each item: `.timeline-dot`, `.timeline-card` with title, school, year

### 4.7 Services Section
- `id="services"` with class `section`
- `.services-grid` with 4 `.service-card` elements (2x2 grid)
- Each card: icon, title, description

### 4.8 Projects Section
- `id="projects"` with class `section`
- `.projects-grid` with 3 `.project-card` elements
- Each card: `.project-image` (gradient placeholder), `.project-info` (title, description), `.project-overlay` with "View Project" pill button

### 4.9 Contact Section
- `id="contact"` with class `section`
- `.contact-card`:
  - Heading: "Get In Touch"
  - `<p>` with intro text
  - Email link: `<a href="mailto:your.email@example.com" class="contact-btn">✉️ your.email@example.com</a>`
- Decorative background element: `.contact-glow`

### 4.10 Footer
- `<footer>`:
  - `<p>&copy; 2026 Kurt Setriani Bognot. All rights reserved.</p>`
  - Social icon links (can be same as hero or different set)

## Acceptance Criteria
- [ ] All sections have correct `id` attributes matching navbar anchor links
- [ ] Profile image tag present with correct `src` and `alt`
- [ ] Navbar uses correct class structure for glass/sticky behavior
- [ ] Hero subtitle element has `id="typewriter"` for JS targeting
- [ ] All cards and grids use class names matching CSS from Phase 2
- [ ] `script.js` linked with `defer` at end of body
- [ ] No broken links (all `href` values match section `id`s)
- [ ] Semantic HTML: `<nav>`, `<section>`, `<footer>` elements used correctly
- [ ] All social links open in new tabs (`target="_blank"` + `rel="noopener"`)
