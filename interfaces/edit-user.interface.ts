import { NextApiRequest } from 'next';

export interface IEditUser extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
  query: {
    userId: string;
  };
}
