import { ProductModel } from '../model/product.model';

export const ProductState: ProductModel = {
  list: [],
  errormessage: '',
  productobj: {
    id: '',
    name: '',
    description: '',
    price: 0,
  },
};
