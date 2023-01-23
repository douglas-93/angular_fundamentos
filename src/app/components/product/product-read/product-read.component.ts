import {Component} from '@angular/core';
import {ProductModel} from "../product.model";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent {
  products: ProductModel[] = []
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  constructor(private service: ProductService) {
  }

  ngOnInit() {
    this.service.read().subscribe(
      products => {
        this.products = products
        // console.log(this.products)
      }
    )
  }
}
