import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AddtocartService } from '../addtocart.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;
  dropdownVisible: boolean = false;

  constructor(
    public authService: AuthService,
    private addtocartService: AddtocartService,
    private viewportScroller:ViewportScroller,
  ) {}
  toProducts() {
        this.viewportScroller.scrollToAnchor('products');
      }

  ngOnInit(): void {
    this.addtocartService.getCartItems().subscribe((items: any[]) => {
      this.cartItemCount = items.length;
    });
  }

  toggleDropdown(): void {
    const dropdownContent = document.getElementById('dropdownContent');
    if (dropdownContent) {
      dropdownContent.classList.toggle('show');
    }
  }

  logout(): void {
    this.authService.logout();
    this.dropdownVisible = false; // Hide the dropdown on logout
  }

  getUserInitial(): string {
    const userProfile = this.authService.getUserProfile();
    if (userProfile && userProfile.email) {
      return userProfile.email.charAt(0).toUpperCase();
    }
    return '';
  }

  getUserEmail(): string {
    const userProfile = this.authService.getUserProfile();
    if (userProfile && userProfile.email) {
      return userProfile.email;
    }
    return '';
  }
}
