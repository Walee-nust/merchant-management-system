import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

import { Order } from './order.model';
import { Invoice } from '../invoice/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  selectedOrder: Order = {
    _id: "",
    user_id: "",
    shipping_address: "",
    cost: 0,
    status: "",
    date: ""
  }
    ;
  orders?: Order[];
  invoice?: Invoice[];
  readonly baseURL = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }

  getInvoiceList(ord: Order) {
    return this.http.get(this.baseURL + '/getOrderInvoices/' + ord._id);
  }


  getOrderList() {
    return this.http.get(this.baseURL + '/getAllOrders');
  }

  putOrder(ord: Order) {
    console.log("putOrder: " + ord._id)
    return this.http.put(this.baseURL + `/updateOrderAddress/${ord._id}`, ord);
  }

  statusOrder(ord: Order) {
    return this.http.put(this.baseURL + `/updateOrderStatus/${ord._id}`, ord);
  }

  deleteOrder(ord: Order) {
    return this.http.delete(this.baseURL + `/deleteOrder/${ord._id}`);

  }
}