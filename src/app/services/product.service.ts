import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _productUrl = "http://localhost:4090/api/product";

  products = ["properties", "cars", "electronics", "furniture", "jobs",
    "bikes", "books", "fashion", "mobiles", "pets", "services"];

  constructor(private http: HttpClient) { }

  getproductData(data) {
    // console.log(data);
    return this.http.get(this._productUrl + "/" + data);
  }

}
