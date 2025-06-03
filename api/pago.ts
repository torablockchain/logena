// pages/api/pago.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN || '',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Método no permitido');

  const { tipo } = req.body;

  let item;
  if (tipo === 'lectura') {
    item = {
      title: 'Lectura Numerológica Completa',
      quantity: 1,
      unit_price: 2990, // ARS
      currency_id: 'ARS',
    };
  } else if (tipo === 'suscripcion') {
    item = {
      title: 'Suscripción Mensual Logena',
      quantity: 1,
      unit_price: 990,
      currency_id: 'ARS',
    };
  } else {
    return res.status(400).json({ error: 'Tipo de pago no válido' });
  }

  try {
    const preference = await mercadopago.preferences.create({
      items: [item],
      back_urls: {
        success: 'https://tusitio.com/success',
        failure: 'https://tusitio.com/failure',
        pending: 'https://tusitio.com/pending',
      },
      auto_return: 'approved',
    });

    res.status(200).json({ url: preference.body.init_point });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Error creando preferencia' });
  }
}
