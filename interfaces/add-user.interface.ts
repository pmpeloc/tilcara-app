import { NextApiRequest } from 'next';

export interface IAddUser extends NextApiRequest {
  body: {
    email: string;
    password: string;
  };
}
