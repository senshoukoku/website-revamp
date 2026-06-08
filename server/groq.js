const Groq = require('groq-sdk');

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function queryGroq(userMessage, instructions) {
  const response = await client.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: instructions },
      { role: 'user', content: userMessage },
    ],
  });

  const outputText = response.choices?.[0]?.message?.content || '';
  const unavailable = outputText.toLowerCase().includes("don't have information")
    || outputText.toLowerCase().includes("don't know");

  return { outputText, hasRelevantContent: !unavailable, raw: response };
}

module.exports = { queryGroq };
