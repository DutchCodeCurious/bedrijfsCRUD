import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dialog: MatDialog
  ) {}

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
      height: '400px',
      disableClose: true,
    });
  }

  setTheme(item: { value: string }) {
    this.document.body.className = '';
    this.document.body.classList.add(item.value);
  }

  MenuList = [
    {
      name: 'Customers',
      url: '/customers',
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
//private themeService: ThemeService,
