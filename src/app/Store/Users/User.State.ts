import { UserModel } from '../model/user.model';

export const UserState: UserModel = {
  list: [],
  erromessage: '',
  userobj: {
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  },
};
