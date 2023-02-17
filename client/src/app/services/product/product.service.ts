import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  products?: Product[];

  private url = 'http://localhost:3000';

  private productList$: Subject<Product[]> = new Subject();
  private physicalProducts: Subject<Product[]> = new Subject();
  private digitalProducts: Subject<Product[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url}/product`);
  }

  private refreshProducts(type: string) {
    this.httpClient.get<Product[]>(`${this.url}/order/getAllProducts`)
      .subscribe(products => {
        const physicalProductsArr: Product[] = [];
        const digitalProductsArr: Product[] = [];

        for (var index in products) {
          if (products[index].type == "physical") {
            physicalProductsArr.push(products[index]); // Add the physical product to the array


          }
          else if (products[index].type == "digital") {
            digitalProductsArr.push(products[index]); // Add the physical product to the array

          }
          console.log(physicalProductsArr);



        }
        if (type == "phy") {
          this.physicalProducts.next(physicalProductsArr);
        }
        else if (type == "digital") {
          this.digitalProducts.next(digitalProductsArr);

        }
        else if (type == "all") {
          this.productList$.next(products);
        }
      });
  }

  getPhysicalProducts(): Subject<Product[]> {
    this.refreshProducts("phy");
    return this.physicalProducts;
  }

  getDigitalProducts(): Subject<Product[]> {
    this.refreshProducts("digital");

    return this.digitalProducts;
  }

  getAllProducts(): Subject<Product[]> {
    this.refreshProducts("all");
    return this.productList$;
  }

  addToCart(userId: string, product: string) {
    if (userId == '') { return }
    // const body = { products: products };
    return this.httpClient.post<any>(`${this.url}/cart/addCart/${userId}`, { productId: product }).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  addOrder(userId: string, shippingAddress: string, status: string) {
    const body = {
      user_id: userId,
      shipping_address: shippingAddress,
      status: status,
    };

    return this.httpClient.post(`${this.url}/order/addOrder`, body).subscribe(
      (response) => {
        console.log(response);
      }
    );

  }

  deleteProduct(product: Product) {
    return this.httpClient.delete(this.url + `/product/${product._id}`);
  }

  getProductById(id: string): Observable<Product> {
    return this.httpClient.get<Product>(this.url + `/product/${id}`);
  }
}
