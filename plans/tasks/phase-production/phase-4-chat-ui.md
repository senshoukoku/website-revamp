# Phase 4: Chat UI -- Floating Bubble

**Goal:** Floating chat bubble + drawer matching existing design system

## Design Tokens Used

- Colors: --accent (#f59e0b), --surface-primary, --bg-primary, --text-primary
- Fonts: --font-body (Poppins), --font-heading (Outfit)
- Radius: --radius-sm, --radius-md, --radius-lg
- Shadows: --shadow-md, --shadow-lg
- Glassmorphism: backdrop-filter: blur(24px)
- Dark mode via [data-theme="dark"]

## Components

### Chat Bubble Trigger
- Fixed bottom-right, 56px circle, accent bg
- z-index: 3000 (above modal at 2000)

### Chat Drawer
- Slides up from bottom-right
- Max 400px x 500px on desktop, full-screen mobile
- Glassmorphism bg, dark/light support
- Header: "AID" + close button
- Messages area: scrollable, auto-scroll
- Input: Poppins font, accent focus ring

### Message Bubbles
- User: accent bg, white text, right
- AID: surface-primary, border, left
- Typing indicator: 3 animated dots
- Source tag below each AID message

## Files to Modify

- src/index.html (chat HTML)
- src/style.css (chat CSS using design tokens)
- components/script.js (chat logic)
