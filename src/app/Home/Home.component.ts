import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { JewelRateService } from '../JewelRate.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {
  jewelRates: { [key: string]: number } = {
    gold: environment.goldRate,
    silver: environment.silverRate,
    diamond: environment.diamondRate
  };

  constructor(private viewportScroller:ViewportScroller, private jewelrateService:JewelRateService) { }

  toProducts() {
    this.viewportScroller.scrollToAnchor('products');
  }
  ngOnInit() {
    this.updateJewelRates();

  }

  updateJewelRates() {
    this.jewelrateService.getJewelRates()
      .then(data => {
        this.jewelRates = data; // Update the rates in the component
      })
      .catch(error => {
        console.error('Error fetching jewel rates:', error);
      });
  }
}
