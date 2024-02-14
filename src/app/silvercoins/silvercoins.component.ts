import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AddtocartService } from '../addtocart.service';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-silvercoins',
  templateUrl: './silvercoins.component.html',
  styleUrls: ['./silvercoins.component.css']
})
export class SilvercoinsComponent implements OnInit {
  public totalItem: number = 0;
  public productList: any;
  image: string = '';
  jewelName: string = '';
  jewelRate: string = '';
  jewelDescription: string = '';
  purity: string = '';
  weight: string = '';
  metal: string = '';
  constructor(
    private viewportScoller: ViewportScroller,
    private api: ApiService,
    private addtocartService: AddtocartService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.image = params['image'];
      this.jewelName = params['jewelName'];
      this.jewelRate = params['jewelRate'];
      this.jewelDescription = params['jewelDescription'];
      this.purity = params['purity'];
      this.weight = params['weight'];
      this.metal = params['metal'];
    });

    this.api.silvercoins().subscribe((res) => {
      this.productList = res;
      // this.productList = res.filter(item => item.type === 'gift');

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addtocart(item: any): void {
    if (this.authService.isLoggedIn()) {
      // User is logged in, add the item to the cart
      this.addtocartService.addtocart(item);
    } else {
      // User is not logged in, navigate to the login page
      this.router.navigate(['/login']).then(() => {
        // Store the item in session storage to add it to the cart after login
        sessionStorage.setItem('pendingCartItem', JSON.stringify(item));
      });
    }
  }
}
