import { NextApiRequest, NextApiResponse } from 'next';
import { loginAction } from '@/lib/actions/login-action';
import cookie from 'cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const result = await loginAction(null, formData);

    if (result.token) {
      res.setHeader('Set-Cookie', cookie.serialize('token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 3, // 3 hours
        path: '/',
      }));
    }

    res.status(200).json(result);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}