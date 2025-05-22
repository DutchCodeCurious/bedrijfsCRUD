import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Store/model/product.model';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {
  deleteProductSuccess,
  loadProduct,
} from '../../../Store/Products/Product.Actions';
import { getProductlist } from '../../../Store/Products/Product.Selector';
import { ProductDialogFormComponent } from '../product-dialog-form/product-dialog-form.component';
import { product } from '../product.model';

@Component({
  selector: 'app-products-page',
  standalone: false,
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss',
})
export class ProductsPageComponent implements OnInit {
  searchTerm: string = '';
  products!: Product[];
  filteredProducts: Product[] = [];
  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
    this.store.select(getProductlist).subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  searchUsers() {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
    }
  }

  addFunction() {
    this.dialog.open(ProductDialogFormComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
    });
  }
  FunctionLog(product: Product) {
    console.log('Detail log');
  }

  FunctionUpdate(product: Product) {
    this.dialog.open(ProductDialogFormComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
      data: {
        product: product,
      },
    });
  }

  FunctionDelete(product: product) {
    if (confirm('do you want to remove')) {
      console.log('delete');
      this.store.dispatch(deleteProductSuccess({ code: product.id }));
    }
  }
}
