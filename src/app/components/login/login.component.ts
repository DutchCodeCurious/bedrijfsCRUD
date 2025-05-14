import { Component, ChangeDetectionStrategy } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormsModule,
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
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required]);

  errorMessage: string = '';

  constructor() {
    // Constructor logic can be added here if needed
    merge(this.email.statusChanges, this.email.valueChanges).subscribe(() => {
      this.updateErrorMessage();
    });
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else if (this.email.hasError('email')) {
      this.errorMessage = 'Not a valid email';
    } else {
      this.errorMessage = '';
    }
  }

  // You can add methods and properties for the login functionality here
  onLogin() {
    if (this.email.valid) {
      // Handle login logic
      console.log('Login successful with email:', this.email.value);
    } else {
      // Handle invalid email case
      console.log('Invalid email address');
    }
  }

  onCancel() {
    // Handle cancel logic
    console.log('Cancel button clicked');
  }
}
