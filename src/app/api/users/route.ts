import { NextApiRequest, NextApiResponse } from 'next';

import { connect } from '@/utils/connection';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const catcher = (error: Error) => res.status(400).json({ error });

  const { User } = await connect();

  return res.json(await User.find({}).catch(catcher));
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const catcher = (error: Error) => res.status(400).json({ error });

  const { User } = await connect();

  return res.json(await User.create(req.body).catch(catcher));
}
