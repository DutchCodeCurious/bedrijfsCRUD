import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Store/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseurl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getALL() {
    return this.http.get<User[]>(this.baseurl);
  }

  GetbyCode(id: string) {
    return this.http.get<User>(`${this.baseurl}/${id}`);
  }

  Delete(id: string) {
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  Update(data: User) {
    return this.http.put<User>(`${this.baseurl}/${data.id}`, data);
  }

  Create(data: User) {
    return this.http.post<User>(`${this.baseurl}`, data);
  }
}
