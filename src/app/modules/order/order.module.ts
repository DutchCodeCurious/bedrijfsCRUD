import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderRoutingModule } from './order-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CartPreviewComponent } from './cart-preview/cart-preview.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { OrderCheckOutComponent } from './order-check-out/order-check-out.component';

@NgModule({
  declarations: [OrderPageComponent, CartPreviewComponent, OrderCheckOutComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
  ],
  exports: [CartPreviewComponent],
})
export class OrderModule {}
