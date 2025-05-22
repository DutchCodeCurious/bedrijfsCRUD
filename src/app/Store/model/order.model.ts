export interface OrderProduct {
  productId: string;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  products: OrderProduct[];
  createdAt: string;
}
