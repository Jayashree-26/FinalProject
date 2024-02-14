import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AddtocartService } from '../addtocart.service';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
})
export class KidsComponent implements OnInit {
  public totalItem: number = 0;
  public productList: any[] = [];
  public products: any[] = [];
  public total: number = 0;
  id: any[] = [];
  image: string = '';
  jewelName: string = '';
  jewelRate: string = '';
  jewelDescription: string = '';
  purity: string = '';
  weight: string = '';
  metal: string = '';

  constructor(
    private api: ApiService,
    private addtocartService: AddtocartService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.image = params['image'];
      this.jewelName = params['jewelName'];
      this.jewelRate = params['jewelRate'];
      this.jewelDescription = params['jewelDescription'];
      this.purity = params['purity'];
      this.weight = params['weight'];
      this.metal = params['metal'];
      // console.log('Image:', this.image);
      // console.log('Jewel Name:', this.jewelName);
      // console.log('Jewel Rate:', this.jewelRate);
      // console.log('Metal:', this.metal);
    });
    this.api.kids().subscribe((res) => {
      this.productList = res;

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
  // redirectToMyOrders(item: any): void {
  //   if (this.authService.isLoggedIn()) {
  //     // User is logged in, navigate to the My Orders page
  //     this.router.navigate(['/checkout'], { state: { product: item } });
  //   } else {
  //     // User is not logged in, navigate to the login page
  //     this.router.navigate(['/login']);
  //   }
  // }
  // redirectToMyOrders(): void {
  //   if (this.authService.isLoggedIn()) {
  //     // User is logged in, navigate to the Buynow page with required query params
  //     this.router.navigate(['/buy'], {
  //       queryParams: {
  //         image: this.image,
  //         jewelName: this.jewelName,
  //         jewelRate: this.jewelRate,
  //         metal: this.metal,
  //       },
  //     });
  //   } else {
  //     // User is not logged in, navigate to the login page with query parameters
  //     this.router.navigate(['/login'], {
  //       queryParams: {
  //         returnUrl: this.router.url, // Pass the returnUrl query parameter to the login page
  //       },
  //     });
  //   }
  // }
}
