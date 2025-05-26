import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  declarations: [InvoicePageComponent, InvoiceListComponent],
  imports: [CommonModule, InvoiceRoutingModule],
})
export class InvoiceModule {}
