import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewportScoller:ViewportScroller, private router: Router) { }
  toProducts(){
    this.viewportScoller.scrollToAnchor("products")
  }

  ngOnInit() {
  }

}
