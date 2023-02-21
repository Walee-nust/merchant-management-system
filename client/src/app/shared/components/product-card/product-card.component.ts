import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() data: any;
  @Input() userName: any;

  constructor(private productService: ProductService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addToCart(product: string) {
    console.log("User Name: " + this.userName)
    if (this.userName == '' || this.userName == null || this.userName == undefined) {
      console.log("Invalid UserId");
      this.snackBar.open('Please select a user ID first!', '', {
        duration: 3000,
      });
      return
    }
    else {
      this.productService.addToCart(this.userName, product);
      // this.ngOnInit();

      this.snackBar.open('Cart Updated!', '', {
        duration: 3000,
      });

    }
    // this.ngOnInit();
  }

}
