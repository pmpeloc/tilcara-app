export interface ResponseVerbs {
  GET?: Function;
  POST?: Function;
  PUT?: Function;
  DELETE?: Function;
}

export interface User {
  _id?: number;
  name: string;
  lastname: string;
  cellphone: string;
  email: string;
}
