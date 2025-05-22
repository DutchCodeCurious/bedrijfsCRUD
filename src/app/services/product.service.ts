import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Store/model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseurl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getALL() {
    return this.http.get<Product[]>(this.baseurl);
  }

  GetbyCode(id: string) {
    return this.http.get<Product>(`${this.baseurl}/${id}`);
  }

  Delete(id: string) {
    return this.http.delete(`${this.baseurl}/${id}`);
  }

  Update(data: Product) {
    return this.http.put<Product>(`${this.baseurl}/${data.id}`, data);
  }

  Create(data: Product) {
    return this.http.post<Product>(`${this.baseurl}`, data);
  }
}
