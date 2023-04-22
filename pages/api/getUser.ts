import { ObjectId } from 'mongodb';
import { NextApiResponse } from 'next';

import clientPromise from '../../lib/mongodb';
import { IApiResponse, IGetUser } from '../../interfaces';

export default async (req: IGetUser, res: NextApiResponse<IApiResponse>) => {
  try {
    const client = await clientPromise;
    const db = client.db('tilcara');
    const { userId } = req.query;

    const userFound = await db.collection('users').findOne({
      _id: new ObjectId(userId),
    });

    res.status(200).json({ status: 'success', data: userFound });
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
