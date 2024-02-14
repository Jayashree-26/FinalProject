// product-details.component.ts
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { JewelRateService } from '../JewelRate.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
})
export class ProductdetailsComponent implements OnInit {
  image: string = '';
  jewelName: string = '';
  jewelRate: string = '';
  jewelDescription: string = '';
  showProductTable: boolean = false;
  public productList: any[] = [];
  purity: string = '';
  weight: any = '';
  metal: string = '';
  id: any[] = [];
  orders: any[] = [];

  jewelRates: { [key: string]: number } = {
    gold: environment.goldRate,
    silver: environment.silverRate,
    diamond: environment.diamondRate
  };

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private authService: AuthService,
    private router: Router,
    private jewelrateService: JewelRateService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      this.image = params['image'];
      this.jewelName = params['jewelName'];
      this.jewelRate = params['jewelRate'];
      this.jewelDescription = params['jewelDescription'];
      this.purity = params['purity'];
      this.weight = params['weight'];
      this.metal = params['metal'];
      this.updateJewelRates();
    });

    this.api.goldring().subscribe((res) => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  showTable() {
    this.showProductTable = !this.showProductTable;
  }

  // redirectToMyOrders(): void {
  //   if (this.authService.isLoggedIn()) {
  //     // User is logged in, navigate to the My Orders page
  //     this.router.navigate(['/buy'], { state: { product: this.jewelName } });
  //     const orderData = {
  //       image: this.image,
  //       jewelName: this.jewelName,
  //       price: this.jewelRate,
  //       id:this.id
  //       // Add other relevant data for the order, if needed
  //     };
  //     this.http.post<any>('http://localhost:3000/orders', orderData).subscribe(
  //     (response) => {
  //       console.log('Order created successfully:', response);
  //       // Navigate to the My Orders page
  //       this.router.navigate(['/buy'], { state: { product: this.jewelName } });
  //     },
  //     (error) => {
  //       console.error('Error creating order:', error);
  //     }
  //   );
  //   } else {
  //     // User is not logged in, navigate to the login page
  //     this.router.navigate(['/login'], { queryParams: { returnUrl: '/buy' } });
  //   }
  // }

  redirectToMyOrders(): void {
    if (this.authService.isLoggedIn()) {
      // User is logged in, navigate to the Buynow page with required query params
      this.router.navigate(['/buy'], {
        queryParams: {
          image: this.image,
          jewelName: this.jewelName,
          jewelRate: this.jewelRate,
          metal:this.metal
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

  updateJewelRates() {
    this.jewelrateService
      .getJewelRates()
      .then((data) => {
        this.jewelRates = data; // Update the rates in the component
      })
      .catch((error) => {
        console.error('Error fetching jewel rates:', error);
      });
  }
}
