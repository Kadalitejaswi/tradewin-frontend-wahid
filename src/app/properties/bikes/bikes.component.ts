import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
bikes={}
  constructor(private _prod:ProductService) { }

  ngOnInit() {
    this.bikes=this._prod.bikes;
  }

}
