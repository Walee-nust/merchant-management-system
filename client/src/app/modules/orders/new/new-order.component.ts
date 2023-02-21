import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from 'src/app/services/product/product.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  categories: string[] = ["All", "Physical", "Digital"];
  productList$: Observable<Product[]> = new Observable();
  physicalList: Observable<Product[]> = new Observable();
  digitalList: Observable<Product[]> = new Observable();
  physicalChecked = false;
  digitalChecked = false;
  userName: string;
  radioSelect: string = "";


  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.userName = '';
    this.fetchAllProducts();
  }

  ngOnInit(): void {
  }


  fetchAllProducts(): void {
    this.productList$ = this.productService.getAllProducts();
  }
  fetchDigitalProducts(): void {
    this.productList$ = this.productService.getDigitalProducts();
  }
  fetchPhysicalProducts(): void {
    this.productList$ = this.productService.getPhysicalProducts();
  }

  radioFunction() {
    console.log(this.radioSelect);
    if (this.radioSelect == "physical") {

      this.fetchPhysicalProducts();
    }
    else if (this.radioSelect == "digital") {
      this.fetchDigitalProducts();
    }
    else {
      this.fetchAllProducts();
    }
  }

  printID() {
    console.log(this.userName);
    this.snackBar.open('User selected Successfully!', '', {
      duration: 3000,
    });
  }

  navigateToCart() {
    this.router.navigate(['orders/cart'], { queryParams: { userId: this.userName } });
  }

  navigateToOrders() {
    this.router.navigate(['orders']);
  }

}
