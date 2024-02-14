import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AddtocartService } from './app/addtocart.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn: boolean = false;
  email: any = '';
  password: any = '';

  constructor(private addtocartService:AddtocartService) {}
  login(email: string, password: string): Observable<boolean> {
    this.email = email;
    this.password = password;
    this.isLoggedIn = true;

    // Check for pending cart item in session storage
    const pendingCartItem = sessionStorage.getItem('pendingCartItem');
    if (pendingCartItem) {
      const item = JSON.parse(pendingCartItem);
      this.addtocartService.addtocart(item);
      sessionStorage.removeItem('pendingCartItem');
    }

    return of(this.isLoggedIn);
  }
  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  logoutUser(): void {
    this.isLoggedIn = false;
  }
}
