import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../../modules/auth/state/auth.Selectors';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private store: Store) {}
  user$ = this.store.select(selectUser);
}
