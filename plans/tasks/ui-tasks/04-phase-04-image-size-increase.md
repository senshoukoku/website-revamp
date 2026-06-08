# Phase 4 — Increase Image Size (~50% Viewport)

## Files to Modify
- \src/style.css\ — resize profile image wrapper and rings

## Steps

### 1. Increase desktop image size (\src/style.css\, lines 475-484)
Change \.profile-img-wrapper\:
\\\css
.profile-img-wrapper {
  position: relative;
  width: min(42vw, 42vh, 500px);
  height: min(42vw, 42vh, 500px);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
\\\

This makes the image responsive to the viewport — 42% of the smaller viewport dimension, capped at 500px. On a 1440x900 screen it'll be ~378px; on a 1920x1080 it'll be ~454px.

### 2. Scale ring borders proportionally (\src/style.css\, lines 486-501)
Update the pseudo-element rings:
\\\css
.profile-img-wrapper::before {
  content: '';
  position: absolute;
  inset: -4px;
  border-radius: 28px;
  border: 2px solid var(--border-color);
  transition: border-color 0.4s ease;
}

.profile-img-wrapper::after {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 34px;
  border: 1px solid var(--border-color);
}
\\\
(The inset values are small enough to look good at any size — no proportional change needed.)

### 3. Update tablet size (\src/style.css\, lines 998-1014)
Change \.profile-img-wrapper\ in the tablet breakpoint:
\\\css
.profile-img-wrapper {
  width: min(40vw, 40vh, 380px);
  height: min(40vw, 40vh, 380px);
  border-radius: 20px;
}
\\\
Update ring border-radii:
\\\css
.profile-img-wrapper::before {
  border-radius: 24px;
}
.profile-img-wrapper::after {
  border-radius: 30px;
}
\\\

### 4. Update mobile size (\src/style.css\, lines 1064-1080)
Change \.profile-img-wrapper\ in the mobile breakpoint:
\\\css
.profile-img-wrapper {
  width: min(50vw, 50vh, 280px);
  height: min(50vw, 50vh, 280px);
  border-radius: 16px;
}
\\\
Update ring border-radii:
\\\css
.profile-img-wrapper::before {
  border-radius: 20px;
}
.profile-img-wrapper::after {
  border-radius: 26px;
}
\\\

## Verification
- Image takes up roughly half the viewport on desktop (42% of vw/vh)
- Image maintains aspect ratio with \object-fit: cover\
- Ring borders scale proportionally
- Hero content still fits beside the image on desktop
- Responsive: sizes scale down appropriately on tablet and mobile
- No layout overflow
