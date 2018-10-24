import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isStretch:boolean=false;
  count=0;
  rol =sessionStorage.getItem('role');
  role=(this.rol=='admin')?'admin':'user';
  constructor(private _authService:AuthService,private _prod:ProductService,private _cart:CartService) { }

  ngOnInit() {
    this._cart.getproducts(sessionStorage.getItem('id'))
    .subscribe(res=>{
       this.count=res.cartList.length;
       console.log(res.cartList.length);
       
    });
  }

  toggleNaviagtion(){
    this.isStretch =!this.isStretch;
  }
}
