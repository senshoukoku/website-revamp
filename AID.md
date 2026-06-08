# AID — AI Assistant Progress Tracker

> **Status:** In Production  
> **Model:** Groq Llama 3.3-70B (via groq-sdk)  
> **Backend:** Node.js/Express (port 3001)  
> **Frontend:** Floating chat bubble (vanilla JS, existing design system)

## Progress

| Phase | Status | Notes |
|---|---|---|
| Phase 1: Backend Setup | Done | Express server with /api/chat endpoint |
| Phase 2: Knowledge Base | Done | Compiled KB from site content + bio |
| Phase 3: Semantic Algorithm | Done | KB-first, Groq handles all semantic understanding |
| Phase 4: Chat UI | Done | Floating bubble + drawer |
| Phase 5: Integration | Done | Wire frontend to backend, tested |

## Architecture

User -> [Chat UI] -> POST /api/chat -> [Server: Express]
  -> Attach full Knowledge Base to system prompt
  -> Groq Llama 3.3-70B semantically understands the question
  -> If answer in KB: respond naturally with bullet points
  -> If not: "I don't have information about that yet"
  -> Return { answer, source, citations }

## AI Personality

AID is a creative, friendly assistant that represents Kurt Setriani Bognot. It speaks in a warm, approachable tone with emojis, bullet points, and proper spacing. It never fabricates information.

## Response Style

- Bullet points (•) or dashes (-) instead of long paragraphs
- Proper spacing between sections
- Emojis used naturally (🎨💻🚀🎓✨)
- Warm and conversational tone

## Key Files

- server/index.js — Express server & prompt builder
- server/groq.js — Groq client wrapper
- server/knowledge-base.json — Structured data about Kurt
- src/index.html — Chat UI markup
- components/script.js — Frontend chat logic

## Notes

- All questions route through Groq with KB context — no keyword matching
- Source tracking: `knowledge_base` if answered from KB, `unavailable` if not
- .env expects `GROQ_API_KEY` (not OPENAI_API_KEY)
