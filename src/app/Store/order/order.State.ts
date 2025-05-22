import { Order } from '../model/order.model';

export interface OrderState {
  orders: Order[];
  error: string | null;
}
