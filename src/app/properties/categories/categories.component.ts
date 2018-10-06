import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  products:any=[];
  constructor() { }

  ngOnInit() {
   this.products=["properties","cars","electonics","furniture","jobs",
          "bikes","books","fashion","mobiles","pets","services"]
  }

}
