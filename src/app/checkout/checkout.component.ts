import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserService } from '../User.service';
import { AddtocartService } from '../addtocart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  orderId: string = '';
  orderData: any;
  public total: number = 0;
  public totalItem: number = 0;
  products: any[]=[];
  product:any;

  constructor(
    private apiservice: ApiService,
    private userService: UserService,
    private renderer: Renderer2,
    private router: Router,
    private addtocartService:AddtocartService
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#dacbc8');
  }

  ngOnInit(): void {
    // Retrieve the selected product from the route state
    // this.products = history.state.product;
    // this.addtocartService.getCartItems().subscribe((items: any[]) => {
    //   this.products = items;
    //   this.calculateTotal();
    // });
    const routeState = this.router.getCurrentNavigation()?.extras.state;
    if (routeState && routeState['product']) {
      this.product = routeState['product'];
      this.products.push(this.product); // Add the product to the cart
    }

    this.addtocartService.getCartItems().subscribe((items: any[]) => {
      this.products = items;
      this.calculateTotal();
    });
  }
  // calculateTotal(): void {
  //   let total = 0;
  //   this.product.forEach((product: any) => {
  //     total += this.product.price * product.quantity;
  //   });
  //   this.total = total;
  // }

  plus(product: any): void {
    product.quantity++;
    this.calculateTotal();
    this.addtocartService.updateCartItemCount();
    sessionStorage.setItem('cartItems', JSON.stringify(this.products));
  }

  minus(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.calculateTotal();
      this.addtocartService.updateCartItemCount();
      sessionStorage.setItem('cartItems', JSON.stringify(this.products));
    }
  }

  calculateTotal(): void {
    let total = 0;
    this.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.total = total;
  }

  placeOrder(): void {
    // Implement the logic to place the order
    // Redirect to the payment page after placing the order
    this.router.navigate(['/payment']);
  }
}
