# Phase 3 — Navbar Immediate Frosted Glass

## Files to Modify
- \components/script.js\ — adjust scroll threshold
- \src/style.css\ — reduce transition duration

## Steps

### 1. Remove scroll delay offset (\components/script.js\, line 48)
Change:
\\\javascript
if (window.scrollY > heroHeight - 100) {
\\\
To:
\\\javascript
if (window.scrollY > heroHeight - 10) {
\\\
This makes the frosted glass background appear almost immediately when the hero section is scrolled past, instead of 100px before.

### 2. Speed up navbar transition (\src/style.css\, line 258)
Change:
\\\css
transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
\\\
To:
\\\css
transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
\\\
The reduced duration makes the background snap into place quickly, giving an "immediate" feel while still being smooth.

### 3. Verify frosted glass is correct (no changes needed, already implemented)
The existing CSS is already correct:
\\\css
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-md);
}
\\\
Dark mode:
\\\css
[data-theme="dark"] .navbar.scrolled {
  background: rgba(11, 17, 32, 0.92);
}
\\\

## Verification
- Scroll past the hero section — navbar background appears immediately with no perceptible delay
- Background uses frosted glass (blur) effect
- Both light and dark modes look correct
- Navbar is transparent on the hero section as before
