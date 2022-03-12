import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  products: Product[];
  product: Product;
  displayedColumns = ["id", "name", "price", "action"]; // para adicionar o valor a minha tabela

  constructor(private productService: ProductService, private route: Router) {
    this.products = [];

    this.product = {
      id: 0,
      name: "",
      price: 0,
    };
  }

  ngOnInit(): void {
    this.productService.read().subscribe((product) => {
      this.products = product;
      console.log(product);
    });
  }

  deleteProduct(id: number): void {
    const deleteProduct = window.confirm(`Deletar Produto de id ${id}`);

    if (!deleteProduct) {
      return;
    }
    this.productService.delete((this.product.id = id)).subscribe(() => {
      this.productService.showMessage("Produto Deletado");

      setTimeout(() =>{
       location.reload();
      }, 500)
      
    });
  }
}
