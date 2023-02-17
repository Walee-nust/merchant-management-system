import { Component } from '@angular/core';
import { Product } from '../../services/product/product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

declare var M: any;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {
  constructor(
    public productService: ProductService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshProductList();

  }
  refreshProductList() {
    this.productService.getProducts().subscribe((res) => {
      this.productService.products = res as Product[];
      console.log(this.productService.products);
    });
  }

  view(prod: Product) {
    console.log(prod);
    this.router.navigate(['products/view/' + prod._id]);
  }

  delete(prod: Product) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.productService.deleteProduct(prod).subscribe((res) => {
        this.refreshProductList();
        this.snackBar.open('Deleted Successfully!', '', {
          duration: 3000,
        });
      });
    }
  }

  navigateToHome() {
    this.router.navigate(['products']);
  }

  newProduct() {
    this.router.navigate(['products/new']);
  }
}
