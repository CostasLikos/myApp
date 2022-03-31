import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/models';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() Product!: Product;

  Message!: string;
  UpdateProduct() {
    this.productService.updateProduct(this.Product).subscribe(() => this.Message = `You succesfully update product with Name ${this.Product.Name}`);
  }

  ShowEditField: boolean = true;
  onShowEdit() {
    this.ShowEditField = !this.ShowEditField;
  }



  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
