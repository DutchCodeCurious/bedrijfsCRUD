import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../../../components/register/register.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state/auth.Actions';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  openRegister() {
    this.dialog.open(RegisterComponent);
  }

  Login() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(AuthActions.login({ email, password }));
  }
}
