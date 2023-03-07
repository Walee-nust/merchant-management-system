import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Cart } from './cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private url = 'http://localhost:3000';
  private cart$ = new Subject<Cart[]>();

  constructor(private httpClient: HttpClient) { }


  getCart(userId: string) {
    this.httpClient.get<Cart[]>(`${this.url}/cart/getCart/${userId}`).subscribe(
      (response) => {
        console.log(response);
        this.cart$.next(response);
      }
    );
    // return this.cart$.asObservable();
  }

  getCartItems(userId: string): Subject<Cart[]> {
    this.getCart(userId);
    return this.cart$;
  }

  deleteFromCart(userId: string, product_id: string) {
    console.log('product_id: ' + product_id);
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        product_id: product_id,
      },
    };
    return this.httpClient.delete<any>(`${this.url}/cart/deleteCart/${userId}`, options).subscribe(
      (response) => {
        console.log(response);
        this.getCart(userId);
      });
  }
}