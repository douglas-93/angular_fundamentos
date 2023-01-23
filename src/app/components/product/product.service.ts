import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";
import {ProductModel} from "./product.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string): void {
    // this.snackBar.open(msg, 'Undo', {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
    })
  }

  create(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl, product)
  }
  read(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl)
  }

  readById(id: string): Observable<ProductModel> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<ProductModel>(url)
  }

  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<ProductModel>(url, product)
  }
}

