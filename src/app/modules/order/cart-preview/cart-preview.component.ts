import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Observable } from 'rxjs';
import { CartItem, CartService } from '../../../services/cart.service';
import { Product } from '../../../Store/model/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  standalone: false,
  styleUrls: ['./cart-preview.component.scss'],
})
export class CartPreviewComponent {
  @ViewChild(MatMenuTrigger, { static: true }) trigger!: MatMenuTrigger;
  items$: Observable<CartItem[]> = this.cart.items$;
  total$: Observable<number> = this.cart.total$;

  private openTimeoutId?: number;
  private closeTimeoutId?: number;
  private readonly delay = 200; // ms

  constructor(private cart: CartService, private router: Router) {}

  openDelayed(): void {
    window.clearTimeout(this.closeTimeoutId);
    this.openTimeoutId = window.setTimeout(() => {
      this.trigger.openMenu();
    }, this.delay);
  }
  closeDelayed(): void {
    window.clearTimeout(this.openTimeoutId);
    this.closeTimeoutId = window.setTimeout(() => {
      this.trigger.closeMenu();
    }, this.delay);
  }

  goToOrder(): void {
    this.router.navigate(['/order']);
  }
}
