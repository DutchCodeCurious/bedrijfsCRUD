import { Component, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { LoginComponent } from '../../modules/auth/login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../Store/model/user.model';
import { addUser } from '../../Store/Users/User.Actions';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private dialog: MatDialog, private store: Store) {}

  openLogin() {
    this.dialog.open(LoginComponent);
  }

  Register() {
    if (this.profileForm.valid) {
      console.log('Valid');
      const obj: User = {
        id: '',
        name: this.profileForm.value.name as string,
        address: this.profileForm.value.address as string,
        phone: this.profileForm.value.phone as string,
        email: this.profileForm.value.email as string,
        password: this.profileForm.value.password as string,
      };
      this.store.dispatch(addUser({ inputdata: obj }));
    } else {
      console.log('Invalid');
    }
  }
}
