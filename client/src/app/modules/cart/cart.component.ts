import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/product/product.service';
import { CartService} from 'src/app/services/cart/cart.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  userName: string = '';
  address: string = '';
  cartSize = 0;

  constructor(private ProductService: ProductService, private cartService: CartService, private route: ActivatedRoute, private router: Router,  private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigate(['/orders']);
  }

  addOrder() {
    this.ProductService.addOrder(this.userName, this.address, 'not delivered');

    this.snackBar.open('Order Confirmed!', '', {
      duration: 3000,
    });

    this.navigateToHome();

  }
}
