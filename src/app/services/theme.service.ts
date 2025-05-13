import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export type theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** 
  //private readonly storageKey = 'theme';
  private readonly document = inject(DOCUMENT);
  //private currentTheme = 'violet-palette'; // standaardthema

  constructor() {}

  setTheme(theme: theme) {
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
    }
  }

  getTheme(): string {
    return this.currentTheme;
  }
 
  getAvailableThemes(): string[] {
    return [
      'azure-blue-theme',
      'rose-red-theme',
      'magenta-violet-theme',
      'cyan-orange-theme',
    ];
  }
    */
}

/** 
const saved = localStorage.getItem(this.storageKey);
if (saved) {
  this.setTheme(saved);
} else {
  this.setTheme(this.currentTheme);
}
*/
