import { createReducer, on } from '@ngrx/store';
import { ProductState } from './Product.State';
import {
  addProductSuccess,
  deleteProductSuccess,
  getProductSuccess,
  loadProductSuccess,
} from './Product.Actions';

const _ProductReducer = createReducer(
  ProductState,
  on(loadProductSuccess, (state, action) => {
    return {
      ...state,
      list: [...action.list],
      errormessage: '',
    };
  }),

  on(addProductSuccess, (state, action) => {
    const _newdata = { ...action.inputdata };
    return {
      ...state,
      list: [...state.list, _newdata],
      errormessage: '',
    };
  }),

  on(getProductSuccess, (state, action) => {
    return {
      ...state,
      productobj: action.obj,
      errormessage: '',
    };
  }),
  on(deleteProductSuccess, (state, action) => {
    const _newdata = state.list.filter((o) => o.id !== action.code);

    return {
      ...state,
      list: _newdata,
      errormessage: '',
    };
  })
);

export function productReducer(state: any, action: any) {
  return _ProductReducer(state, action);
}
