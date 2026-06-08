# Phase 3: Strict Source-Anchored Algorithm

**Goal:** Implement core AI logic with strict source anchoring

## Algorithm Flow

1. Parse user question
2. Query Knowledge Base (embedded in system prompt)
   a. Found match -> respond from KB + source: knowledge_base
   b. No match -> OpenAI GPT-4o-mini with web_search tool
      i. Results found -> respond + source: web_search
      ii. No results -> respond + source: unavailable
3. Return { answer, source, citations }

## System Prompt Rules

- Personality: Creative, friendly assistant for Kurt
- NEVER invent information about Kurt
- Only answer from: (a) KB content, (b) verified web search
- If unavailable: "I don't have information about that yet"
- Always cite source

## Files to Create/Modify

- server/index.js (full implementation)
- server/openai.js (OpenAI client wrapper)

## Deliverables

- KB answers cite source
- Web search fallback works
- Unavailable questions say "I don't know"
