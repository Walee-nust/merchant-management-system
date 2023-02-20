import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  myControl = new FormControl(
    { value: '', disabled: false },
  );
  filteredProducts: Observable<any>;
  selectedProducts = [];
  productCount = 1;

  ngOnInit() {
    this.productService.getProducts().subscribe(
      res => {
        res.forEach(product => {
          this.products.push(product.name);
          this.filteredProducts = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => this._filter(value))
            );
        });
      }
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.products.filter(option => option.toLowerCase().includes(filterValue));
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  addProdField() {
    this.productCount++;
    
  }

  addProdToOrder(prod: any) {
    this.selectedProducts.push(prod);
  }

  incQuantity(prod: any) {
    prod.quantity++;
  }

  decQuantity(prod: any) {
    prod.quantity--;
  }

}
