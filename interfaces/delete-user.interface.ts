import { NextApiRequest } from 'next';

export interface IDeleteUser extends NextApiRequest {
  query: {
    userId: string;
  };
}
