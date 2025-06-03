// api/generar-lectura.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { nombre, numeroCamino } = req.body;

  if (!nombre || !numeroCamino) {
    return res.status(400).json({ error: 'Faltan datos' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Sos un asistente espiritual que brinda lecturas numerológicas en tono místico, humano y profesional.',
        },
        {
          role: 'user',
          content: `Generá una lectura numerológica para una persona llamada ${nombre}, cuyo número del camino de vida es ${numeroCamino}. Explicá en 5 o 6 líneas.`,
        },
      ],
    });

    return res.status(200).json({ lectura: completion.choices[0].message.content });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
