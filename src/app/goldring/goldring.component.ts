import { Component, OnInit } from '@angular/core';
import { AddtocartService } from '../addtocart.service';
import { ApiService } from '../api.service';
import { ViewportScroller } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-goldring',
  templateUrl: './goldring.component.html',
  styleUrls: ['./goldring.component.css'],
})
export class goldringComponent implements OnInit {
  public totalItem: number = 0;
  public productList: any[] = [];
  public products: any[] = [];
  public total: number = 0;
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

    this.api.goldring().subscribe((res) => {
      this.productList = res;
      console.log('API Response:', this.productList);
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

  redirectToMyOrders(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/buy'], {
        queryParams: {
          image: this.image,
          jewelName: this.jewelName,
          jewelRate: this.jewelRate,
          metal: this.metal,
        },
      });
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: this.router.url, // Pass the returnUrl query parameter to the login page
        },
      });
    }
  }
}
