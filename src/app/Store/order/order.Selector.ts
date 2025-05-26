import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from '../model/order.model';

const getuserstate = createFeatureSelector<Order>('order');

const { selectAll } = adapter.getSelectors();

export const selectAllOrders = createSelector(selectOrderState, selectAll);
