import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products:any=[];
  constructor(private _prod:ProductService) {}

  ngOnInit() {
    this._prod.getProductNames()
    .subscribe(
      res=>{
this.products=res;
console.log(res);

      }
    )


  }
}
