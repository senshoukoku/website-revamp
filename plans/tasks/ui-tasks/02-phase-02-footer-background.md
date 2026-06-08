# Phase 2 — Footer Background

## Files to Modify
- \src/style.css\ — add background to footer

## Steps

### 1. Add background to footer (\src/style.css\, lines 836-862)
Edit the \ooter\ rule block to add a background:

\\\css
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 48px 32px 32px;
  margin-top: 40px;
  border-top: 1px solid var(--border-color);
  text-align: center;
  background: var(--surface-primary);
}
\\\

Add dark mode variant after the light-mode rule:
\\\css
[data-theme="dark"] footer {
  background: var(--surface-secondary);
}
\\\

### 2. Adjust visual balance (optional)
If the footer feels too heavy with a solid background, use a subtle gradient instead:
\\\css
background: linear-gradient(to top, var(--bg-secondary), transparent);
\\\

## Verification
- Footer has a distinct background that separates it from the page body
- Both light and dark modes look correct
- Background does not conflict with the border-top separator
- Social buttons and copyright text remain readable
