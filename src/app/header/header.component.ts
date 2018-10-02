import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStretch:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  toggleNaviagtion(){
    this.isStretch =!this.isStretch;
  }
}
