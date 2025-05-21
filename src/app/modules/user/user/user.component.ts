import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../Store/model/user.model';
import { getUser, loadUser } from '../../../Store/Users/User.Actions';
import { getUserlist } from '../../../Store/Users/User.Selectors';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  users!: User[];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
    this.store.select(getUserlist).subscribe((data) => {
      this.users = data;
    });
  }

  FunctionLog(code: string) {
    this.store.select(getUserlist).subscribe((users) => {
      const user = users.find((u) => u.id === code);
      console.log(user);
    });
  }
}
