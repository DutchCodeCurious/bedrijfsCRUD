import { Component, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
  });

  constructor(private dialog: MatDialog) {}

  openRegister() {
    this.dialog.open(RegisterComponent);
  }

  Login() {
    if (this.loginForm.valid) {
      // Handle login logic
      console.log(this.loginForm);
      console.log(
        'Login successful with email:',
        this.loginForm.controls['email'].value
      );
    } else {
      // Handle invalid email case
      console.log(this.loginForm);
      console.log(
        'Login unsuccessful with email:',
        this.loginForm.controls['email'].value
      );
      console.log('Invalid email address');
    }
  }
}
/* 


confirmPassword: new FormControl('', Validators.required),
    


   <mat-error *ngIf="email.invalid && (email.dirty || email.touched)">
    <mat-icon>error</mat-icon>
    <span *ngIf="email.errors?.['required']">Email is required</span>
    <span *ngIf="email.errors?.['email']">Invalid email format</span>
  </mat-error>
 



    updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }




*/
