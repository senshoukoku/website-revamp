# Phase 5: Integration, Testing & Polish

**Goal:** Wire frontend to backend, test all scenarios, polish

## Tasks

1. Wire API: POST fetch to http://localhost:3001/api/chat
2. Handle loading (typing indicator), errors
3. Display source tags

## Test Scenarios

1. KB: "Where does Kurt live?" -> KB answer + source tag
2. KB: "What are Kurt's skills?" -> KB list
3. Web: "What is Kurt's LinkedIn?" -> web search + source
4. Unavailable: "What is Kurt's favorite color?" -> "I don't know"
5. Off-topic: "What's the weather?" -> redirect to Kurt
6. Dark mode: Chat respects theme
7. Mobile: Full-screen on <768px
8. Error: Server down -> friendly message

## Polish

- Smooth animations (0.3s ease)
- Auto-scroll, auto-focus input
- Enter to send, Shift+Enter newline
- Session message history
