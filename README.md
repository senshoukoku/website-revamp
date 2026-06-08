# Kurt Setriani Bognot — Portfolio Website

Personal portfolio website showcasing projects, certifications, and skills, with an AI chat assistant (AID) powered by Groq's Llama 3.3-70B.

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Backend:** Node.js, Express 5, Groq SDK, OpenAI SDK
- **Fonts:** Poppins, Outfit (Google Fonts)
- **Email:** EmailJS (CDN)

## Features

- Dark/light theme toggle with localStorage persistence
- Typewriter effect on hero subtitle
- Scroll-triggered stagger animations (IntersectionObserver)
- Cursor glow effect
- AI Chat (AID) — slide-out drawer answering questions via Groq LLM
- Certificate modal with zoom controls
- Contact form via EmailJS
- Responsive design with navbar scroll effects

## Structure

```
src/              — HTML and CSS source
components/       — script.js (all interactivity)
server/           — Express API (POST /api/chat), Groq client, knowledge base
assets/           — profile photo, project screenshots, certificates, logo designs
plans/            — build plans and task docs
```