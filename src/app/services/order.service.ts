import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../Store/model/order.model';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseurl = 'http://localhost:3000/orders';
  constructor(private http: HttpClient) {}

  getALL() {
    return this.http.get<Order[]>(this.baseurl);
  }

  Create(data: Order) {
    return this.http.post<Order>(`${this.baseurl}`, data);
  }
}
