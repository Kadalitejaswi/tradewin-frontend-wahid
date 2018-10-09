import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  subCategoryId:any;
  productName:any;
  productinfo={}

  constructor(private route:ActivatedRoute,private _prod:ProductService) { }

  ngOnInit() {
  this.route.params.subscribe(params=>{
            //  console.log(params.type);
             this.subCategoryId=params.productId;
             this.productName=params.product;
    })

    this._prod.getSubProducts(this.productName,this.subCategoryId)
    .subscribe(
    res=>{
      this.productinfo=res
      console.log(res);
         })
         }  
  }


