import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-Type': 'application/json'

    })
  }


  //GET
  getProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>(this.URL);
  }

  //CREATE
  createProduct(product: Product): Observable<Product> {
    return this.httpService.post<Product>(this.URL, product, this.httpOptions);
  }

  //DELETE

  deleteProduct(id: number) {
    const url = `${this.URL}/${id}`;

    return this.httpService.delete<Product>(url, this.httpOptions);
  }

  //UPDATE
  updateProduct(product: Product) {
    const url = `${this.URL}/${product.Id}`;

    return this.httpService.put(url, product, this.httpOptions)
  }









  private URL = "https://localhost:44332/api/products";
  constructor(private httpService: HttpClient) { }
}
