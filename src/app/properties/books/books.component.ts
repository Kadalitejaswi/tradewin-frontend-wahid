import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  category = {
    name: "Books, Sports & Hobbies",
    image: "./assets/images/books/books.png",
    ads: " 1,78,016 Ads"
  }
  products = [
  { name: "Books", image: "./assets/images/books/book.png" },
  { name: "Musical & Instruments", image: "./assets/images/books/music.png" },
  { name: "Sports & Equpiment", image: "./assets/images/books/sports.png" },
  { name: "Gym & Fitness", image: "./assets/images/books/gym.png" }]
  constructor() { }

  ngOnInit() {
  }

}
