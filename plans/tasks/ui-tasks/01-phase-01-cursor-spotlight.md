# Phase 1 — Cursor Spotlight Effect

## Files to Modify
- \src/index.html\ — add glow element
- \src/style.css\ — style the glow element, remove old body:hover::before
- \components/script.js\ — add mousemove tracking

## Steps

### 1. Add glow element to HTML (\src/index.html\)
Insert inside \<body>\, before \<nav>\:
\\\html
<div id="cursor-glow" aria-hidden="true"></div>
\\\

### 2. Remove old body:hover grid effect (\src/style.css\, lines 65-69)
Delete the entire \ody:hover::before\ rule block.

### 3. Style the cursor glow (\src/style.css\)
Add after the grid background block (after line 74):
\\\css
#cursor-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(
    circle,
    rgba(var(--accent-rgb), 0.12) 0%,
    rgba(var(--accent-rgb), 0.05) 25%,
    transparent 60%
  );
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  will-change: transform;
}

[data-theme="dark"] #cursor-glow {
  background: radial-gradient(
    circle,
    rgba(var(--accent-rgb), 0.18) 0%,
    rgba(var(--accent-rgb), 0.08) 25%,
    transparent 60%
  );
}

#cursor-glow.hidden {
  opacity: 0;
}
\\\

### 4. Add cursor tracking JS (\components/script.js\)
Add inside the \DOMContentLoaded\ callback (before the closing \});\):
\\\javascript
// === Cursor Glow Effect ===
const glow = document.getElementById('cursor-glow');
let glowTicking = false;
let glowX = -999;
let glowY = -999;

document.addEventListener('mousemove', (e) => {
  glowX = e.clientX;
  glowY = e.clientY;
  if (!glowTicking) {
    requestAnimationFrame(() => {
      glow.style.transform = \	ranslate(\px, \px) translate(-50%, -50%)\;
      glowTicking = false;
    });
    glowTicking = true;
  }
});

document.addEventListener('mouseleave', () => {
  glow.classList.add('hidden');
});

document.addEventListener('mouseenter', () => {
  glow.classList.remove('hidden');
});
\\\

## Verification
- Open the page, move cursor around — radial glow follows cursor across entire page
- Grid lines are illuminated within the glow area
- No performance stutter (requestAnimationFrame throttling)
- Glow fades when cursor leaves the window
- Glows correctly in both light and dark modes
