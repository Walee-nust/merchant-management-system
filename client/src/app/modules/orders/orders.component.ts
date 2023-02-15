import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public orderService: OrderService) { }

  orders: any = [];

  ngOnInit() {
    this.orderService.getOrderList().subscribe((response) => {
      this.orders = response;
      console.log(this.orders);
    });
  }

}
