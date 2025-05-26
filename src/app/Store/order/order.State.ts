import { Order } from '../model/order.model';

export interface OrderState {
  orders: Order[];
  error: string | null;
}

export const initialOrderState: OrderState = {
  orders: [],
  error: null,
};
