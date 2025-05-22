import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../Store/model/user.model';
import { deleteUserSuccess, loadUser } from '../../../Store/Users/User.Actions';
import { getUserlist } from '../../../Store/Users/User.Selectors';
import { MatDialog } from '@angular/material/dialog';
import { UpdateuserdialogComponent } from '../updateuserdialog/updateuserdialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: false,
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss',
})
export class UserListComponent implements OnInit {
  searchTerm: string = '';
  users!: User[];
  filteredUsers: User[] = [];

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadUser());
    this.store.select(getUserlist).subscribe((data) => {
      this.users = data;
      this.filteredUsers = data;
    });
  }

  searchUsers() {
    if (!this.searchTerm) {
      this.filteredUsers = this.users;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredUsers = this.users.filter((user) =>
        user.name.toLowerCase().includes(term)
      );
    }
  }

  FunctionLog(user: User) {
    this.router.navigate(['/users', user.id], { state: { user } });
  }

  FunctionUpdate(user: User) {
    this.dialog.open(UpdateuserdialogComponent, {
      data: { user },
    });
  }
  FunctionDelete(code: string) {
    if (confirm('do you want to remove')) {
      console.log('delete');
      this.store.dispatch(deleteUserSuccess({ code: code }));
    }
  }
}

/*     
this.store.dispatch(getUser({ id: code }));
    this.store.select(getuser).subscribe((user) => {
      console.log('Geselecteerde user:', user);
    });
     */
