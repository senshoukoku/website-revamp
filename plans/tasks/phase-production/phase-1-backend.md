# Phase 1: Backend Setup

**Goal:** Initialize Node.js/Express server with /api/chat POST endpoint

## Tasks

1. Create server/ directory
2. Run npm init -y inside server/
3. Install: express, openai, dotenv, cors
4. Create server/index.js (Express on port 3001, CORS, JSON parser, POST /api/chat placeholder)
5. Create server/.env (OPENAI_API_KEY, PORT=3001)
6. Add server/.env to .gitignore
7. Add start script to server/package.json: node index.js
8. Verify server starts and responds

## Files to Create

- server/package.json
- server/index.js
- server/.env

## Deliverables

- Working Express server on port 3001
- /api/chat endpoint returning placeholder
- .env ready for OpenAI key
