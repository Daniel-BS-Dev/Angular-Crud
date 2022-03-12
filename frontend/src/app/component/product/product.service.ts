import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/products";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // função responsavel por mostar uma mensagem da tela quando criar produto
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }) // msg - message, '' - action
  }

  // função responsavel por criar um produto, na pasta product-created
  createProduct(product: Product): Observable<Product>{  // vai return um observable do tipo product
  return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`)

  }
}

// estou usando este service no product-created
