import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NavigationExtras, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-save-scheme',
  templateUrl: './save-scheme.component.html',
  styleUrls: ['./save-scheme.component.css'],
})
export class SaveSchemeComponent implements OnInit {
  faq1Open = false;
  faq2Open = false;
  faq3Open = false;
  formData = {
    name: '',
    number: '',
  };

  toggleFAQ(faqNumber: number) {
    if (faqNumber === 1) {
      this.faq1Open = !this.faq1Open;
    } else if (faqNumber === 2) {
      this.faq2Open = !this.faq2Open;
    } else if (faqNumber === 3) {
      this.faq3Open = !this.faq3Open;
    }
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {}

  // redirectToMyOrders() {
    // if (this.authService.isLoggedIn()) {
      // User is logged in, display an alert message
      // alert('Form Submitted!! We will call you shortly');
      // window.location.reload();
      // this.router.navigate(['/']);
    // } else {
      // User is not logged in, navigate to the login page and store the current URL
      // this.router.navigateByUrl('/login');
    // }
  // }
  redirectToMyOrders() {
    if (this.authService.isLoggedIn()) {
      // User is logged in, display an alert message
      alert('Form Submitted!! We will call you shortly');

      // Get the stored URL or default to '/'
      const returnUrl = (this.router.getCurrentNavigation()?.extras.state as any)?.returnUrl || '/';

      console.log('Current URL:', this.router.url);
    console.log('Return URL:', returnUrl);
      // Navigate to the stored URL
      this.router.navigateByUrl(returnUrl);
    } else {
      // User is not logged in, navigate to the login page and store the current URL
      const currentUrl = this.router.url;
      const navigationExtras: NavigationExtras = {
        state: { returnUrl: currentUrl }
      };
      this.router.navigateByUrl('/login', navigationExtras);
    }
  }
}
