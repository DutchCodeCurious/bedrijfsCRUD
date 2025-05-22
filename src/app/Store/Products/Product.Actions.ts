import { createAction, props } from '@ngrx/store';
import { Product } from '../model/product.model';

export const LOAD_PRODUCT = '[Product] Load Product';
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success';
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Fail';

export const ADD_PRODUCT = '[Product] add Product';
export const ADD_PRODUCT_SUCCESS = '[Product] add Product Success';

export const GET_PRODUCT = '[Product] Get Product';
export const GET_PRODUCT_SUCCESS = '[Product] Get Product Success';

export const UPDATE_PRODUCT = '[Product]] Update Product';
export const UPDATE_PRODUCT_SUCCESS = '[Product] Update Product Success';

export const DELETE_PRODUCT = '[Product] Deleted Product';
export const DELETE_PRODUCT_SUCCESS = '[Product] Deleted Product Success';

//LOAD
export const loadProduct = createAction(LOAD_PRODUCT);
export const loadProductSuccess = createAction(
  LOAD_PRODUCT_SUCCESS,
  props<{ list: Product[] }>()
);
export const loadProductFail = createAction(
  LOAD_PRODUCT_FAIL,
  props<{ error: string }>()
);

//GET
export const getProduct = createAction(GET_PRODUCT, props<{ id: string }>());
export const getProductSuccess = createAction(
  GET_PRODUCT_SUCCESS,
  props<{ obj: Product }>()
);

//ADD
export const addProduct = createAction(
  ADD_PRODUCT,
  props<{ inputdata: Product }>()
);
export const addProductSuccess = createAction(
  ADD_PRODUCT_SUCCESS,
  props<{ inputdata: Product }>()
);

//UPDATE
export const updateProduct = createAction(
  UPDATE_PRODUCT,
  props<{ inputdata: Product }>()
);
export const updateProductSuccess = createAction(
  UPDATE_PRODUCT_SUCCESS,
  props<{ inputdata: Product }>()
);

//DELETE
export const deleteProduct = createAction(
  DELETE_PRODUCT,
  props<{ code: string }>()
);
export const deleteProductSuccess = createAction(
  DELETE_PRODUCT_SUCCESS,
  props<{ code: string }>()
);

//RESET
