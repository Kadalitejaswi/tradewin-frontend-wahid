import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products=["properties","cars","electonics","furniture","jobs",
  "bikes","books","fashion","mobiles","pets","services"];
  cars={
    category :{
                name: "Cars",
                image: "./assets/images/cars/car.png",
                ads: " 1,78,016 Ads"
               },
    products : [{ name: "cars", image: "./assets/images/cars/car.png" },
                { name: "truck", image: "./assets/images/cars/truck.png" },
                { name: "vehicles", image: "./assets/images/cars/vehicle.png" },
                { name: "spare parts", image: "./assets/images/cars/spare.png" }
              ]
  }

  bikes={
    category:{
              name:"Bikes",
              image:"./assets/images/bikes/bikes.png",
              ads:" 1,78,016 Ads"
             },
    products:[{name:"Motorcycles",image:"./assets/images/bikes/motor.png"},
              {name:"Scooters",image:"./assets/images/bikes/scooter.png"},
              {name:"Bicycles",image:"./assets/images/bikes/bicycle.png"},
              {name:"Spare Parts",image:"./assets/images/bikes/parts.png"}]
  }

 books={
    category : {
                name: "Books, Sports & Hobbies",
                image: "./assets/images/books/books.png",
                ads: " 1,78,016 Ads"
              },
    products :[{ name: "Books", image: "./assets/images/books/book.png" },
               { name: "Musical & Instruments", image: "./assets/images/books/music.png" },
               { name: "Sports & Equpiment", image: "./assets/images/books/sports.png" },
               { name: "Gym & Fitness", image: "./assets/images/books/gym.png" }]
 }

  constructor() { }

}
