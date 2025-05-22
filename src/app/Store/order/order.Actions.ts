import { createAction, props } from '@ngrx/store';
import { Order } from '../model/order.model';

export const LOAD_ORDER = '[Order] Load Order';
export const LOAD_ORDER_SUCCESS = '[Order] Load Order Success';
export const LOAD_ORDER_FAIL = '[Order] Load Order Fail';

export const CREATE_ORDER = '[Order] Create Order';
export const CREATE_ORDER_SUCCESS = '[Order] Create Order Success';
export const CREATE_ORDER_FAIL = '[Order] Create Order Failed';

//CREATE
export const createOrder = createAction(
  CREATE_ORDER,
  props<{ order: Order }>()
);
export const createOrderSuccess = createAction(
  CREATE_ORDER_SUCCESS,
  props<{ order: Order }>()
);
export const createOrderFail = createAction(
  CREATE_ORDER_FAIL,
  props<{ error: string }>()
);
