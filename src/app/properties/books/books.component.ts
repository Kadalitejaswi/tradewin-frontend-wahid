import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 books={};
  constructor(private _prod:ProductService) { }

  ngOnInit() {
    this.books=this._prod.books;
  }

}
