import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  id = this.route.snapshot.params['id'];

  keys = ['Id', 'Name', 'Type', 'Category', 'Price']

  lenOfLargestKey = this.keys.reduce((a, b) => a.length > b.length ? a : b).length;

  productImage: any = {}
  productDict = {};

  public keepOriginalOrder = (a, b) => a.key;

  ngOnInit() {
    this.viewProduct(this.id)
  }

  viewProduct(id: string) {
    console.log('Key Length', this.lenOfLargestKey)
    this.productService.getProductById(id).subscribe((res) => {
      const { _id, name, type, categoryId, price, image } = res;
      this.productDict = {
        Id: _id,
        Name: name,
        Type: type,
        Category: categoryId,
        Price: price
      }

      this.productImage = image;
    })
  }

}
