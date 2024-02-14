import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { AddtocartService } from '../addtocart.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  styleUrls: ['./silver.component.css']
})
export class SilverComponent implements OnInit {
  public totalItem :number=0;
  public productList:any;
  constructor(private api:ApiService,private addtocartService:AddtocartService,private viewportScoller: ViewportScroller) { }

  ngOnInit() {
    this.addtocartService.getCartItems().subscribe((res: string | any[]) => {
      this.totalItem = res.length;
    });

      this.api.silverring()
      .subscribe(res=>{
        this.productList=res;

        this.productList.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price});
        });
    })
  }
    addtocart(item:any){
      this.addtocartService.addtocart(item);

    }

  }


