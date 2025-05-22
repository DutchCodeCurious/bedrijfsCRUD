import { createReducer, on } from '@ngrx/store';
import { OrderState } from './order.state';
import { createOrderFail, createOrderSuccess } from './order.actions';

const initialState: OrderState = {
  orders: [],
  error: null,
};

export const orderReducer = createReducer(
  initialState,
  on(createOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    error: null,
  })),
  on(createOrderFail, (state, { error }) => ({
    ...state,
    error,
  }))
);
