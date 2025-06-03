// pages/api/generar-lectura.ts
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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
          content:
            'Sos un asistente espiritual que brinda lecturas numerológicas en tono místico, humano y profesional.',
        },
        {
          role: 'user',
          content: `Generá una lectura numerológica para una persona llamada ${nombre}, cuyo número del camino de vida es ${numeroCamino}.
          Explicá brevemente qué significa ese número en términos de virtudes, desafíos y aprendizajes. 
          Hacelo en 5 a 6 líneas como máximo, de forma clara y con un cierre inspirador.`,
        },
      ],
      temperature: 0.8,
    });

    const respuesta = completion.choices[0]?.message?.content || "No se pudo generar la lectura.";
    return res.status(200).json({ lectura: respuesta });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || 'Error al conectar con OpenAI' });
  }
}
