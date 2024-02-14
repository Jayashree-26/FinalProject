import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AddtocartService } from './addtocart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private user: any;
  userFirstLetter: string | null = null; // New property to store the first letter of the user's email
  userEmail: string = '';

  constructor(
    private router: Router,
    private addtocartService: AddtocartService,
  ) {
    this.loadUserFromSession();
  }

  load(user: { id: string; email: string }) {
    this.loggedIn = true;
    this.userFirstLetter = this.getUserFirstLetter();
    this.user = { id: user.id, email: user.email };
    sessionStorage.setItem('userData', JSON.stringify(this.user));
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
    this.user = this.user;
    sessionStorage.removeItem('userData');
    sessionStorage.removeItem('cartItems'); // Clear the cart items from session storage
    this.addtocartService.clearCart(); // Clear the cart items in the AddtocartService
    this.router.navigate(['/']);
  }

  private getUserFirstLetter(): string | null {
    if (this.user && this.user.email) {
      return this.user.email.charAt(0).toUpperCase();
    }
    return null;
  }

  updateUserDetails(email: string): void {
    this.userEmail = email;
    this.userFirstLetter = this.getUserFirstLetter(); // Update the user's first letter as well
  }

  getUserEmail(): string {
    if (this.user && this.user.email) {
      return this.user.email;
    }
    return '';
  }

  getUserProfile(): { name: string; email: string } | null {
    if (this.loggedIn) {
      const userData = sessionStorage.getItem('userData');
      if (userData) {
        return JSON.parse(userData);
      }
    }
    return null;
  }

  private loadUserFromSession() {
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      this.loggedIn = true;
      this.user = JSON.parse(userData);
    }
  }

  getLoggedInUser(): any {
    return this.user;
  }

}

