import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { InvoiceRoutingModule } from './invoice-routing.module';

@NgModule({
  declarations: [InvoicePageComponent],
  imports: [CommonModule, InvoiceRoutingModule],
})
export class InvoiceModule {}
