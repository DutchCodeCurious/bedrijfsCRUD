import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { selectUser } from '../../modules/auth/state/auth.Selectors';
import { Store } from '@ngrx/store';
import * as AuthActions from '../../modules/auth/state/auth.Actions';
import { LoginComponent } from '../../modules/auth/login/login.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatDialog,
    private store: Store
  ) {}
  user$ = this.store.select(selectUser);

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
    });
  }

  setTheme(item: { value: string }) {
    this.document.body.className = '';
    this.document.body.classList.add(item.value);
  }

  MenuList = [
    {
      name: 'Users',
      url: '/users',
    },
    {
      name: 'Products',
      url: '/products',
    },
    {
      name: 'invoice',
      url: '/invoice',
    },
  ];

  colorList = [
    {
      theme: 'cyan-orange',
      value: 'cyan-orange-theme',
    },
    {
      theme: 'magenta',
      value: 'magenta-green-theme',
    },
    {
      theme: 'azure',
      value: 'azure-blue-theme',
    },
    {
      theme: 'rose',
      value: 'spring-green-palette',
    },
  ];

  logList = [
    {
      function: 'logIn',
    },
    {
      function: 'SigUp',
    },
  ];
}
