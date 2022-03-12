import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // função responsavel por mostar uma mensagem da tela quando criar produto
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ['msg-success']
    }) // msg - message, '' - action
  }

  // função responsavel por criar um produto, na pasta product-created
  createProduct(product: Product): Observable<Product>{  // vai return um observable do tipo product
  return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`)

  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
     return this.http.put<Product>(url, product)
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
     return this.http.delete<Product>(url)
  }

}

// estou usando este service no product-created
