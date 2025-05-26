import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem, CartService } from '../../../services/cart.service';
import { Product } from '../../../Store/model/product.model';
import { Store } from '@ngrx/store';
import { selectUser } from '../../auth/state/auth.Selectors';

@Component({
  selector: 'app-order-page',
  standalone: false,
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss',
})
export class OrderPageComponent {
  items$: Observable<CartItem[]> = this.cart.items$;
  total$: Observable<number> = this.cart.total$;

  constructor(private cart: CartService, private store: Store) {}
  user$ = this.store.select(selectUser);

  onRemove(id: string) {
    this.cart.remove(id);
  }
  onAdd(product: Product) {
    this.cart.add(product);
    console.log('add to cart', product.id);
  }

  placeOrder() {
    console.log('Order placed successfully!');
    this.cart.clear();
  }

  emptyCart() {
    console.log('Cart emptied successfully!');
    this.cart.clear();
  }
}
