import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product } from 'src/app/services/product/product.model';
import { MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  categories: string[] = ["All", "Physical", "Digital"];
  productList$ = [];
  displayedColumns: string[] = ['name', 'quantity', 'cost'];
  dataSource: MatTableDataSource<Product>;
  selectedProducts = [];


  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.fetchAllProducts();
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }

  products = new FormControl();

  fetchAllProducts(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.productList$ = data;
      console.log(this.productList$);
    });
  }

  addProduct(product: Product) {
    console.log(product);
    if (this.selectedProducts.includes(product)) {
      this.selectedProducts = this.selectedProducts.filter(p => p._id !== product._id);
      console.log('Removed');
      console.log(this.selectedProducts);
    } else {
      this.selectedProducts.push(product);
      console.log('Added');
      console.log(this.selectedProducts);
    }

    this.dataSource = new MatTableDataSource(this.selectedProducts);
  }

  navigateToOrders() {
    this.router.navigate(['orders']);
  }

}
