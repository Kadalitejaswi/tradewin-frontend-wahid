import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  category={
    name:"Bikes",
    image:"./assets/images/bikes/bikes.png",
    ads:" 1,78,016 Ads"
  }
  products=[{name:"Motorcycles",image:"./assets/images/bikes/motor.png"},
  {name:"Scooters",image:"./assets/images/bikes/scooter.png"},
  {name:"Bicycles",image:"./assets/images/bikes/bicycle.png"},
  {name:"Spare Parts",image:"./assets/images/bikes/parts.png"}]
  constructor() { }

  ngOnInit() {
  }

}
