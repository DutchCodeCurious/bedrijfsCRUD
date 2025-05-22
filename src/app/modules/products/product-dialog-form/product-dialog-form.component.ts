import { Component, Inject, OnInit } from '@angular/core';
import { Product } from '../../../Store/model/product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  addProduct,
  updateProduct,
} from '../../../Store/Products/Product.Actions';

@Component({
  selector: 'app-product-dialog-form',
  standalone: false,
  templateUrl: './product-dialog-form.component.html',
  styleUrl: './product-dialog-form.component.scss',
})
export class ProductDialogFormComponent implements OnInit {
  product!: Product;
  productForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
    ]),
  });

  constructor(
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: { product?: Product }
  ) {}

  ngOnInit(): void {
    if (this.data?.product) {
      this.productForm.patchValue(this.data.product);
    }
  }

  onCancel(): void {
    this.productForm.reset();
  }

  ngOnDestroy(): void {
    this.productForm.reset();
  }

  onAdd() {
    if (this.productForm.valid) {
      console.log('Valid');

      const obj: Product = {
        id: this.data?.product?.id || '',
        name: this.productForm.value.name as string,
        description: this.productForm.value.description as string,
        price: this.productForm.value.price as number,
      };

      if (this.data?.product) {
        this.store.dispatch(updateProduct({ inputdata: obj }));
      } else {
        this.store.dispatch(addProduct({ inputdata: obj }));
      }
    } else {
      console.log('Invalid');
    }
  }
}
3;
