import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { showalert } from '../common/App.Actions';
import { ProductService } from '../../services/product.service';
import {
  addProduct,
  addProductSuccess,
  deleteProduct,
  deleteProductSuccess,
  getProduct,
  getProductSuccess,
  loadProduct,
  loadProductFail,
  loadProductSuccess,
  updateProduct,
  updateProductSuccess,
} from './Product.Actions';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private service: ProductService,
    private store: Store
  ) {}

  loadProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadProduct),
      exhaustMap((action) => {
        return this.service.getALL().pipe(
          map((data) => {
            return loadProductSuccess({ list: data });
          }),
          catchError((error) => of(loadProductFail({ error: error.message })))
        );
      })
    )
  );

  getProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProduct),
      exhaustMap((action) => {
        return this.service.GetbyCode(action.id).pipe(
          map((data) => {
            return getProductSuccess({ obj: data });
          }),
          catchError((_error) =>
            of(
              showalert({
                message: 'Failed to fetch data :' + _error.message,
                resulttype: 'fail',
              })
            )
          )
        );
      })
    )
  );
  addProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(addProduct),
      exhaustMap((action) => {
        const userWithId = { ...action.inputdata, id: uuidv4() };
        return this.service.Create(userWithId).pipe(
          switchMap((data) => {
            return of(
              addProductSuccess({ inputdata: action.inputdata }),
              showalert({
                message: 'Created successfully ',
                resulttype: 'pass',
              })
            );
          })
        );
      }),
      catchError((error) =>
        of(
          showalert({
            message: 'Failed to create product',
            resulttype: 'fail',
          })
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteProduct),
      switchMap((action) => {
        return this.service.Delete(action.code).pipe(
          switchMap((data) => {
            return of(
              deleteProductSuccess({ code: action.code }),
              showalert({
                message: 'Deleted successfully ',
                resulttype: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(
              showalert({
                message: 'Failed to Delete product',
                resulttype: 'fail',
              })
            )
          )
        );
      })
    )
  );
  updateUser$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateProduct),
      switchMap((action) => {
        return this.service.Update(action.inputdata).pipe(
          switchMap((data) => {
            return of(
              updateProductSuccess({ inputdata: action.inputdata }),
              showalert({
                message: 'Updated successfully ',
                resulttype: 'pass',
              }),
              loadProduct()
            );
          }),
          catchError((_error) =>
            of(
              showalert({
                message: 'Updated to Delete Product',
                resulttype: 'fail',
              })
            )
          )
        );
      })
    )
  );
}
