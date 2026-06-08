# Phase 5 — Mobile Home Section Gap & Centering

## Files to Modify
- \src/style.css\ — reduce mobile/tablet gaps, add centering

## Steps

### 1. Reduce tablet gap (\src/style.css\, line 965)
Change:
\\\css
gap: 40px;
\\\
To:
\\\css
gap: 24px;
\\\

### 2. Reduce mobile gap and add vertical centering (\src/style.css\, lines 1060-1062)
Replace the existing mobile hero block:
\\\css
.hero {
  gap: 12px;
  justify-content: center;
}
\\\

Also ensure the hero content and image are stacked vertically centered. The tablet styles already set \lex-direction: column; text-align: center; align-items: center;\ — these are inherited by mobile. Adding \justify-content: center\ on mobile ensures the entire content block is vertically centered within the viewport.

### 3. Ensure proper stacking order on mobile
The HTML already has the image \.profile-img-wrapper\ after \.hero-content\. On mobile with \lex-direction: column\, the text appears above the image. If the user prefers image on top, the HTML order would need to be swapped. No change needed unless requested.

### 4. Tweak hero padding-top on mobile (optional)
Current mobile hero \padding-top\ is inherited from the section padding (\60px 16px\). If needed, adjust for tighter spacing:
\\\css
.hero {
  padding-top: 68px; /* navbar height */
}
\\\

## Verification
- On mobile viewport (<768px): gap between image and text/buttons is ~12px
- Content is vertically centered within the viewport
- On tablet (768-1023px): gap is ~24px
- Both image and text/buttons appear centered as a group
- Navbar still sits above the hero content
- No content clipping at any mobile size
