import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  selectedOrder: Order = {
    _id: "",
    // user_id: "",
    shipping_address: "",
    cost: 0,
    status: "",
    date: ""
  };

  orders?: Order[];
  readonly baseURL = 'http://localhost:3000/order';
  constructor(private http: HttpClient) { }

  getOrderList() {
    return this.http.get(this.baseURL + '/getAllOrders').pipe((res: any) => {
      // loop through every product in products array in order and replace the product_id with the product name
      console.log(res.products);
      for (var i = 0; i < res.products.length; i++) {
        this.http.get('http://localhost:3000/product' + res.products[i].productId).subscribe((product: any) => {
          res.products[i].productId = product.name;
        })
      }
      return res;
    })
  }

  putOrder(ord: Order) {
    console.log("putOrder: " + ord._id)
    return this.http.put(this.baseURL + `/updateOrderAddress`, ord);
  }

  statusOrder(ord: Order) {
    return this.http.put(this.baseURL + `/updateOrderStatus`, ord);
  }

  deleteOrder(ord: Order) {
    return this.http.delete(this.baseURL + `/deleteOrder`, {
      params: {
        id: ord._id
      }
    });

  }
}



