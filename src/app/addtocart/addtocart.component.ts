import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { AddtocartService } from '../addtocart.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css'],
})
export class AddtocartComponent implements OnInit {
  products: any[] = [];
  total: number = 0;
  returnUrl: string = '/'; // Default returnUrl to the home page
  public cartItemCount: number = 0;
  // image: string = '';
  // jewelName: string = '';
  // jewelRate: string = '';
  // jewelDescription: string = '';
  // purity: string = '';
  // weight: string = '';
  // metal: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private addtocartService: AddtocartService,
    private renderer: Renderer2,
    private route:ActivatedRoute
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }

  ngOnInit() {
    this.addtocartService.getCartItems().subscribe((items: any[]) => {
      this.products = items;
      this.calculateTotal();
      this.updateTotalItem();
    });

    this.addtocartService.getCartItemCount().subscribe((count: number) => {
      this.cartItemCount = count;
    });

    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/';
    });
    // this.route.params.subscribe((params: Params) => {
    //   this.image = params['image'];
    //   this.jewelName = params['jewelName'];
    //   this.jewelRate = params['jewelRate'];
    //   this.jewelDescription = params['jewelDescription'];
    //   this.purity = params['purity'];
    //   this.weight = params['weight'];
    //   this.metal = params['metal'];

    // });
  }

  // addtocart(item: any) {
  //   const existingItem = this.products.find(
  //     (product) => product.id === item.id && product.size === item.size
  //   );
  //   if (existingItem) {
  //     alert('Item already added to the cart.');
  //   } else {
  //     item.quantity = 1;
  //     this.products.push(item);
  //     this.calculateTotal();
  //     sessionStorage.setItem('cartItems', JSON.stringify(this.products));
  //     this.addtocartService.updateCartItemCount();
  //   }

  // }
  addtocart(item: any) {
    if (this.authService.isLoggedIn()) {
      const existingItem = this.products.find(
        (product) => product.id === item.id && product.size === item.size
      );
      if (existingItem) {
        alert('Item already added to the cart.');
      } else {
        item.quantity = 1;
        this.products.push(item);
        this.calculateTotal();
        sessionStorage.setItem('cartItems', JSON.stringify(this.products));
        this.addtocartService.updateCartItemCount();
      }
    } else {
      // Redirect to the login page
      this.router.navigate(['/login'],{ queryParams: { returnUrl: this.router.url } })
      // this.router.navigateByUrl(this.returnUrl);
    }
  }

  removeItem(item: any) {
    this.addtocartService.removeItem(item);
    this.calculateTotal();
    this.updateTotalItem();
  }

  updateTotalItem(): void {
    this.addtocartService.getCartItemCount().subscribe((count: number) => {
      this.cartItemCount = count;
    });
  }

  calculateTotal(): void {
    let total = 0;
    this.products.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.total = total;
  }

  // emptycart() {
  //   this.products = [];
  //   this.total = 0;
  //   sessionStorage.removeItem('cartItems');
  //   this.addtocartService.updateCartItemCount();
  //   this.updateTotalItem(); // Add this line to update the cart item count immediately
  // }

  emptycart() {
    this.addtocartService.clearCart();
    this.calculateTotal();
  }

  minus(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.calculateTotal();
      sessionStorage.setItem('cartItems', JSON.stringify(this.products));
    }
  }

  plus(item: any) {
    item.quantity++;
    this.calculateTotal();
    sessionStorage.setItem('cartItems', JSON.stringify(this.products));
  }

  buynow(item: any): void {
    this.router.navigate(['/checkout'], { state: { product: item } });
  }
}
