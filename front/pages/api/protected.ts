import { NextApiRequest, NextApiResponse } from 'next';
import { checkAuth } from '../../middleware/checkAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  checkAuth(req, res, () => {
    // Your protected route logic here
    res.status(200).json({ message: 'You are authenticated' });
  });
}