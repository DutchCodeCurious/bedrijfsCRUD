import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, withLatestFrom } from 'rxjs/operators';
import { CartService, CartItem } from '../../../services/cart.service';
import { createOrder } from '../../../Store/order/order.Actions';
import { Order, OrderItem } from '../../../Store/model/order.model';
import { selectUser } from '../../auth/state/auth.Selectors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-order-check-out',
  standalone: false,
  templateUrl: './order-check-out.component.html',
  styleUrls: ['./order-check-out.component.scss'],
})
export class OrderCheckOutComponent {
  user$ = this.store.select(selectUser);

  constructor(private store: Store, private cart: CartService) {}

  placeOrder(): void {
    this.user$
      .pipe(
        // combineer de user met de laatste cart-items en total
        withLatestFrom(
          this.cart.items$, // Observable<CartItem[]>
          this.cart.total$ // Observable<number>
        ),
        take(1) // we willen maar één keer helemaal alles
      )
      .subscribe(([user, cartItems, total]) => {
        if (!user) {
          console.error('User not found, cannot place order');
          return;
        }

        // map CartItem[] → OrderItem[]
        const orderItems: OrderItem[] = cartItems.map((ci) => ({
          productId: ci.product.id,
          name: ci.product.name,
          price: ci.product.price,
          quantity: ci.quantity,
        }));

        const order: Order = {
          id: uuidv4(),
          userId: user.id,
          products: orderItems,
          totalAmount: total,
          payed: false,
        };
        console.log('Placing order:', order);
        this.store.dispatch(createOrder({ order }));
      });
  }
}
