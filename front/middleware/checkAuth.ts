import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';

export function checkAuth(req: NextApiRequest, res: NextApiResponse, next: Function) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const token = cookies.token;

  if (!token) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  next();
}