import { Component } from '@angular/core';
import {ProductService} from "../product.service";
import {Router} from "@angular/router";
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: ProductModel = {
    name: 'Produto de teste',
    price: 125.98
  }

  constructor(private service: ProductService,
              private router: Router) {
  }

  createProduct(): void {
    this.service.create(this.product).subscribe(
      () => {
        this.service.showMessage('Operação executada com sucesso!')
        this.router.navigate(['/products'])
      }
    )
  }

  cancel() {
    this.router.navigate(["/products"])
  }
}
