import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
cars={}
  constructor(private _prod:ProductService) { }

  ngOnInit() {
    this.cars=this._prod.cars;
  }

}
