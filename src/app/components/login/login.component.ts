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

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    //confirmPassword: new FormControl('', Validators.required),
  });

  constructor() {}

  Login() {
    if (this.profileForm.controls['email'].valid) {
      // Handle login logic
      console.log(this.profileForm);
      console.log(
        'Login successful with email:',
        this.profileForm.controls['email'].value
      );
    } else {
      // Handle invalid email case
      console.log(this.profileForm);
      console.log(
        'Login unsuccessful with email:',
        this.profileForm.controls['email'].value
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
