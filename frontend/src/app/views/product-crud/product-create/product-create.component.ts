import { Product } from './../../../component/product/product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/component/product/product.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: 'product de teste',
    price: 125.98
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    // o metodo subscribe me notifica quando a resposta chegar
    this.productService.createProduct(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/products']);
    })
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
