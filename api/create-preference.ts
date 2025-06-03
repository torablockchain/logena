// pages/api/create-preference.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    const preference = {
      items: [
        {
          title: 'Lectura Numerológica Completa',
          quantity: 1,
          currency_id: 'ARS',
          unit_price: 2500, // o el monto que definas
        },
      ],
      back_urls: {
        success: `${req.headers.origin}/success`,
        failure: `${req.headers.origin}/failure`,
        pending: `${req.headers.origin}/pending`,
      },
      auto_return: 'approved',
      external_reference: 'lectura-' + Date.now(),
    };

    const response = await mercadopago.preferences.create(preference);
    return res.status(200).json({ init_point: response.body.init_point });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
}
