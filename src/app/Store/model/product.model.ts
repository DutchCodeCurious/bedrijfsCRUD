export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductModel {
  list: Product[];
  productobj: Product;
  errormessage: string;
}
