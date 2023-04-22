import clientPromise from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { NextApiResponse } from 'next';

import { IApiResponse, IDeleteUser } from '../../interfaces';

export default async (req: IDeleteUser, res: NextApiResponse<IApiResponse>) => {
  try {
    const client = await clientPromise;
    const db = client.db('tilcara');
    const { userId } = req.query;

    const userDeleted = await db.collection('users').deleteOne({
      _id: new ObjectId(userId),
    });

    res.status(200).json({ status: 'success', data: userDeleted });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
