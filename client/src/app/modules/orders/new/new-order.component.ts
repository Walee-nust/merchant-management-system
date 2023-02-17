import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(
    private orderService: OrderService,
    private productService: ProductService,
  ) { }

  products = [];
  myControl = new FormControl();

  ngOnInit() {
    this.productService.getProducts().subscribe(
      res => {
        res.forEach(product => {
          this.products.push(product.name);
        });
      }
    );
  }

}
