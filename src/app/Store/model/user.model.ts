export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface UserModel {
  list: User[];
  userobj: User;
  erromessage: string;
}
