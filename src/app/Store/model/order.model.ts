export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  products: OrderItem[];
  totalAmount: number;
  payed: boolean;
}
