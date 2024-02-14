import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-diamond',
  templateUrl: './diamond.component.html',
  styleUrls: ['./diamond.component.css']
})
export class DiamondComponent implements OnInit {
  public totalItem :number=0;
  constructor(private viewportScoller: ViewportScroller,private addtocartService:AddtocartService) {

  }

  ngOnInit(): void {
    
  }


}
