import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from '../model/product.model';

const getProductState = createFeatureSelector<ProductModel>('product');

export const getProductlist = createSelector(
  getProductState,
  (state) => state?.list ?? []
);

export const getuser = createSelector(getProductState, (state) => {
  return state?.productobj;
});
