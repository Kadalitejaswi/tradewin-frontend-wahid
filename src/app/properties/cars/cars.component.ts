import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  category = {
    name: "Cars",
    image: "./assets/images/cars/car.png",
    ads: " 1,78,016 Ads"
  }
  products = [{ name: "cars", image: "./assets/images/cars/car.png" },
  { name: "truck", image: "./assets/images/cars/truck.png" },
  { name: "vehicles", image: "./assets/images/cars/vehicle.png" },
  { name: "spare parts", image: "./assets/images/cars/spare.png" }]
  constructor() { }

  ngOnInit() {
  }

}
