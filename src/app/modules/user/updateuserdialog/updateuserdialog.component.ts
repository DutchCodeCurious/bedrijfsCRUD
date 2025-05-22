import { Component, Inject, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../Store/model/user.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { updateUser } from '../../../Store/Users/User.Actions';

@Component({
  selector: 'app-updateuserdialog',
  standalone: false,
  templateUrl: './updateuserdialog.component.html',
  styleUrl: './updateuserdialog.component.scss',
})
export class UpdateuserdialogComponent {
  user!: User;
  updateForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { user: User },
    private store: Store
  ) {
    this.user = data.user;
    this.updateForm.patchValue(this.user);
  }

  onCancel(): void {
    this.updateForm.reset();
  }

  ngOnDestroy(): void {
    this.updateForm.reset();
  }

  onUpdate(): void {
    const inputdata = this.updateForm.getRawValue() as User;
    this.store.dispatch(updateUser({ inputdata }));
  }
}
