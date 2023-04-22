import { NextApiRequest } from 'next';

export interface IGetUser extends NextApiRequest {
  query: {
    userId: string;
  };
}
