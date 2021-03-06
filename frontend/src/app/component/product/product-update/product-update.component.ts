import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private id: ActivatedRoute
  ) {
    this.product = {
      name: "",
      price: 0,
    };
  }

  ngOnInit(): void {// pegando os atributos pelo id
    const takeId = this.id.snapshot.paramMap.get('id')// 'id' -> o o nome do meu parametro colocado na rota
    this.productService.readById(String(takeId)).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto Alterado')
      this.router.navigate(['/products']);
    })
  }


  cancel(): void{
    this.router.navigate(['/products'])
  }
}
