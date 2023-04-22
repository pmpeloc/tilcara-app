import { NextApiRequest, NextApiResponse } from 'next';

import clientPromise from '../../lib/mongodb';
import { IApiResponse } from '../../interfaces';

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IApiResponse>
) => {
  try {
    const client = await clientPromise;
    const db = client.db('tilcara');

    const users = await db.collection('users').find({}).toArray();

    res.status(200).json({ status: 'success', data: users });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
