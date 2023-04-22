import { ObjectId } from 'mongodb';

import clientPromise from '../../lib/mongodb';
import { IApiResponse, IEditUser } from '../../interfaces';
import { NextApiResponse } from 'next';

export default async (req: IEditUser, res: NextApiResponse<IApiResponse>) => {
  try {
    const client = await clientPromise;
    const db = client.db('tilcara');
    const { userId } = req.query;
    const { email, password } = req.body;

    const userUpdated = await db.collection('users').updateOne(
      {
        _id: new ObjectId(userId),
      },
      {
        $set: {
          email,
          password,
        },
      }
    );

    res.status(201).json({ status: 'success', data: userUpdated });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
