# Bug Report & Fix Log

## 1. `ReferenceError: emailjs is not defined`

**Type:** Runtime Error (Missing Dependency)

**Root Cause:**
The EmailJS SDK library (`@emailjs/browser`) was never loaded in `index.html`. The `script.js` file calls `emailjs.init()` and `emailjs.send()` (lines 186, 203), but the library's CDN script was missing from the HTML — it was only documented in `FUNCTIONS.md` but never actually included.

**Fix:**
Added the EmailJS CDN script tag to `src/index.html` at line 288, **before** the `script.js` tag. Both use the `defer` attribute to ensure proper execution order:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js" defer></script>
<script src="../components/script.js" defer></script>
```

**File changed:** `src/index.html`

---

## 2. `Unsafe attempt to load URL file:///... 'file:' URLs are treated as unique security origins`

**Type:** Browser Security Warning (Environment Limitation)

**Root Cause:**
The portfolio is opened directly from the file system (`file://` protocol) rather than served via an HTTP server. Modern browsers treat `file://` origins as unique/opaque security origins, meaning cross-document interactions (including hash anchor navigation like `#home`, `#about`) generate security warnings.

**Fix (Workaround):**
This is **not a code bug** — it's a browser security restriction when loading files via `file://`. To eliminate the warning, serve the site using a local HTTP development server:

- **VS Code:** Install the "Live Server" extension, right-click `src/index.html`, and select "Open with Live Server"
- **Node.js:** Run `npx serve src/` from the project root
- **Python:** Run `python -m http.server 8080` inside the `src/` directory

No code changes are needed for this warning.
