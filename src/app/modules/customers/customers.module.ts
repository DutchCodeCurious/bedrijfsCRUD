import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { Customer } from './customers.model';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [CustomerPageComponent],
  imports: [CommonModule, CustomersRoutingModule],
})
export class CustomersModule {}
