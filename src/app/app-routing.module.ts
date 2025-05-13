import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'invoice',
    loadChildren: () =>
      import('./modules/invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./modules/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
