import { Component } from '@angular/core';
import { Order } from '../../../Store/model/order.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-invoice-list',
  standalone: false,
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.scss',
})
export class InvoiceListComponent {
  invoices!: Order[];
  filteredInvoices: Order[] = [];
  //searchTerm: string = '';

  constructor(private store: Store) {}
}
