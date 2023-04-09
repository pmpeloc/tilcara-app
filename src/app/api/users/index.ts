import { NextApiRequest, NextApiResponse } from 'next';

import { ResponseVerbs } from '@/utils/types';
import { connect } from '@/utils/connection';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseVerbs = req.method as keyof ResponseVerbs;

  const catcher = (error: Error) => res.status(400).json({ error });

  const handleCase: ResponseVerbs = {
    GET: async (req: NextApiRequest, res: NextApiResponse) => {
      const { User } = await connect();
      res.json(await User.find({}).catch(catcher));
    },
    POST: async (req: NextApiRequest, res: NextApiResponse) => {
      const { User } = await connect();
      res.json(await User.create(req.body).catch(catcher));
    },
  };

  const response = handleCase[method];

  if (response) {
    response(req, res);
  } else {
    res.status(400).json({ error: 'No response for this request' });
  }
};

export default handler;
