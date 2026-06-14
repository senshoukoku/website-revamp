# Experience Section — Design Spec

## Summary
Add an Experience section to the portfolio after Education, using the same timeline layout, with a corresponding nav link. Update the AI knowledge base.

## Changes

### 1. Navbar (`src/index.html:23`)
Insert `<li><a href="#experience">Experience</a></li>` after the Education nav link.

### 2. Experience Section (`src/index.html`)
Insert a new `<section id="experience">` between Education and Services (after line 190). Uses the same timeline HTML structure as Education:
- `section-header` with subtitle "Experience" and heading "Experience"
- `.timeline` container with `.timeline-line` and 5 alternating `.timeline-item` entries

### 3. Timeline Entries
Newest-first order, matching Education's alternation pattern (starts `right`):

| # | Role | Detail | Years | Side |
|---|------|--------|-------|------|
| 1 | Graphic Designer | Luffy D Printing Services | Jan 2026 — Apr 2026 | right |
| 2 | Work Immersion | HR Management, Municipal of Calumpit | Jan 2026 — Feb 2026 | left |
| 3 | Motion Graphics | Figma & After Effects | 2024 — 2025 | right |
| 4 | Animation | Adobe Animate | 2023 — 2025 | left |
| 5 | UI/UX Graphic Designer | Figma | 2021 — 2025 | right |

### 4. Knowledge Base (`server/knowledge-base.json`)
Replace the 2-item `experience` array with 5 entries matching the new data.

### No CSS changes needed
The existing `.timeline` styles in `style.css` are reused as-is.
