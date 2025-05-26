import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../Store/model/product.model';

export interface CartItem {
  product: Product;
  quantity: number;
}

const STORAGE_KEY = 'cart_items';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: BehaviorSubject<CartItem[]>;
  readonly items$: Observable<CartItem[]>;
  readonly total$: Observable<number>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    const initial: CartItem[] = isPlatformBrowser(this.platformId)
      ? this.loadFromStorage()
      : [];
    this.cartItems = new BehaviorSubject<CartItem[]>(initial);
    this.items$ = this.cartItems.asObservable();
    this.total$ = this.items$.pipe(
      map((items) =>
        items.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      )
    );

    // Alleen in browser opslaan bij elke wijziging
    if (isPlatformBrowser(this.platformId)) {
      this.items$.subscribe((items) => {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
          // fallback voor fouten in private mode
          // Check
        }
      });
    }
  }

  add(product: Product): void {
    const items = [...this.cartItems.value];
    const index = items.findIndex((item) => item.product.id === product.id);
    if (index > -1) {
      items[index].quantity++;
    } else {
      items.push({ product, quantity: 1 });
    }
    this.cartItems.next(items);
  }

  remove(productId: string): void {
    const items = [...this.cartItems.value];
    const index = items.findIndex((item) => item.product.id === productId);
    if (index > -1) {
      if (items[index].quantity > 1) {
        items[index].quantity--;
      } else {
        items.splice(index, 1);
      }
    }
    this.cartItems.next(items);
  }

  clear(): void {
    this.cartItems.next([]);
  }

  private loadFromStorage(): CartItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? (JSON.parse(data) as CartItem[]) : [];
    } catch {
      return [];
    }
  }
}
