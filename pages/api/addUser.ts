import { NextApiResponse } from 'next';

import clientPromise from '../../lib/mongodb';
import { IApiResponse, IAddUser } from '../../interfaces';

export default async (req: IAddUser, res: NextApiResponse<IApiResponse>) => {
  try {
    const client = await clientPromise;
    const db = client.db('tilcara');
    const { email, password } = req.body;

    const newUser = await db.collection('users').insertOne({
      email,
      password,
    });

    res.status(201).json({ status: 'success', data: newUser });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
