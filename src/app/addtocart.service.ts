import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddtocartService {
  private cartItemCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private cartItemsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public cartItems$: Observable<any[]> = this.cartItemsSubject.asObservable();
  private cartItemsKey = 'cartItems';

  constructor() {
    const storedCartItems = sessionStorage.getItem(this.cartItemsKey);
    if (storedCartItems) {
      this.cartItemsSubject.next(JSON.parse(storedCartItems));
      this.updateCartItemCount();
    }
  }

  getCartItems(): Observable<any[]> {
    return this.cartItems$;
  }

  addtocart(item: any): void {
    const cartItems = this.cartItemsSubject.getValue();
    const existingItem = cartItems.find(
      (cartItem: any) => cartItem.id === item.id && cartItem.size === item.size
    );
    if (existingItem) {
      alert('Item already added to the cart.');
    } else {
      cartItems.push(item);
      this.cartItemsSubject.next(cartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.updateCartItemCount();
    }
  }

  removeItem(item: any): void {
    const cartItems = this.cartItemsSubject.getValue();
    const index = cartItems.findIndex(
      (cartItem: any) => cartItem.id === item.id && cartItem.size === item.size
    );
    if (index !== -1) {
      cartItems.splice(index, 1);
      this.cartItemsSubject.next(cartItems);
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
      this.updateCartItemCount();
    }
  }

  clearCart(): void {
    // sessionStorage.removeItem(this.cartItemsKey);
    this.cartItemsSubject.next([]);
    this.updateCartItemCount();
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  updateCartItemCount(): void {
    const cartItems = this.cartItemsSubject.getValue();
    const count = cartItems.length;
    this.cartItemCount.next(count);
  }
}
