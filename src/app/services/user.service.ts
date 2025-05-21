import { Injectable } from '@angular/core';
import { randomUUID } from 'crypto';
import { NewUser } from '../modules/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  addUser(userData: NewUser): void {
    const user = {
      id: randomUUID(),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      address: userData.address,
    };
  }

  private saveUser() {}
}
