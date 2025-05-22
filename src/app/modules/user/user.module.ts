import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';

// Components
import { UserListComponent } from './userlist/userlist.component';
import { UserRoutingModule } from './user-routing.module';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UpdateuserdialogComponent } from './updateuserdialog/updateuserdialog.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserdetailsComponent,
    UpdateuserdialogComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatToolbar,
  ],
})
export class UserModule {}
