import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
  declarations: [OrderPageComponent],
  imports: [CommonModule, OrderRoutingModule],
})
export class OrderModule {}
