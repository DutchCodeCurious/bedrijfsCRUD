import { createAction, props } from '@ngrx/store';
import { Order } from '../model/order.model';

export const LOAD_ORDERS = '[Order] Load Orders';
export const LOAD_ORDERS_SUCCESS = '[Order] Load Orders Success';
export const LOAD_ORDERS_FAIL = '[Order] Load Orders Fail';

export const CREATE_ORDER = '[Order] Create Order';
export const CREATE_ORDER_SUCCESS = '[Order] Create Order Success';
export const CREATE_ORDER_FAIL = '[Order] Create Order Failed';

export const LOAD_USER_ORDERS = '[Order] Load User Orders';
//export const LOAD_USER_ORDERS_SUCCESS = '[Order] Load User Orders Success';

//LOAD ALL ORDERS
export const loadOrders = createAction(LOAD_ORDERS);
export const loadOrdersSuccess = createAction(
  LOAD_ORDERS_SUCCESS,
  props<{ orders: Order[] }>()
);
export const loadOrdersFail = createAction(
  LOAD_ORDERS_FAIL,
  props<{ error: string }>()
);

//LOAD USER ORDERS
export const loadUserOrders = createAction(
  LOAD_USER_ORDERS,
  props<{ userId: string }>()
);

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
