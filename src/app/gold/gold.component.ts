import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  public totalItem :number=0;

  constructor(private viewportScoller: ViewportScroller,private addtocartService: AddtocartService) {

  }


  ngOnInit(): void {
    
  }
}
