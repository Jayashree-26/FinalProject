import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AddtocartService } from '../addtocart.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-goldbangles',
  templateUrl: './goldbangles.component.html',
  styleUrls: ['./goldbangles.component.css'],
})
export class GoldbanglesComponent implements OnInit {
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

    this.api.goldbangles().subscribe(
      (res) => {
        this.productList = res;

        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      },
      (error) => {
        console.error('Error fetching goldbangles:', error);
      }
    );
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
      // User is logged in, navigate to the Buynow page with required query params
      this.router.navigate(['/buy'], {
        queryParams: {
          image: this.image,
          jewelName: this.jewelName,
          jewelRate: this.jewelRate,
          metal: this.metal,
        },
      });
    } else {
      // User is not logged in, navigate to the login page with query parameters
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: this.router.url, // Pass the returnUrl query parameter to the login page
        },
      });
    }
  }
}
