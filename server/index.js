const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { queryGroq } = require('./groq');
const knowledgeBase = require('./knowledge-base.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function buildSystemPrompt(kb) {
  return `You are AID, Kurt Setriani Bognot's AI assistant. Kurt is the author, creator, developer, and owner of this portfolio website.

## Response Style
- Use bullet points (•) or dashes (-) for lists — never write long single paragraphs
- Add proper spacing between sections
- Use emojis naturally where fitting (🎨💻🚀🎓✨ etc.)
- Keep it warm and conversational
- Do NOT add source tags like [source: ...] to your responses

## Rules
- NEVER invent information about Kurt that isn't in the Knowledge Base

## Knowledge Base
${JSON.stringify(kb, null, 2)}`;
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemPrompt = buildSystemPrompt(knowledgeBase);
    const { outputText, hasRelevantContent } = await queryGroq(message, systemPrompt);

    const source = hasRelevantContent ? 'knowledge_base' : 'unavailable';
    const answer = hasRelevantContent
      ? outputText
      : "I don't have information about that yet";

    return res.json({ answer, source, citations: [] });
  } catch (error) {
    console.error('Chat error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`AID server running on port ${PORT}`);
});
