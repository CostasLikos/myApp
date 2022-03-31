import { Component, OnInit } from '@angular/core';
import { Product } from './models';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //Properties
  Products!: Product[];

  //MyMethods
  //Read
  ReadProducts() {
    this.ProductService.getProducts().subscribe(data => this.Products = data);
  }

  //Create
  CreateProduct(name: string, price: number): void {
    this.ProductService.createProduct({ Name: name, Price: price } as Product)
      .subscribe(() => this.ReadProducts())
  }

  //Delete
  DeleteProduct(id: number) {
    this.ProductService.deleteProduct(id).subscribe(() => this.ReadProducts());
  }

  SelectedProduct!: Product;
  //Select
  OnSelect(product: Product) {
    this.SelectedProduct = product;
  }


  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ReadProducts();
  }

}
