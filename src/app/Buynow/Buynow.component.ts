import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { AddtocartService } from '../addtocart.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css'],
})
export class BuynowComponent implements OnInit {
  buyNowForm!: FormGroup;
  showSuccessMessage: boolean = false;
  orderDetails: any;
  products: any[] = [];
  image: string = '';
  jewelName: string = '';
  jewelRate: string = '';
  metal: string = '';
  orderItems: any[] = []; // Define the orderItems property here
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding


  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    private router: Router,
    private http: HttpClient,
    private api: ApiService,
    private auth: AuthService,
    private route: ActivatedRoute,
    private addtocartService: AddtocartService
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.image = params['image'];
      this.jewelName = params['jewelName'];
      this.jewelRate = params['jewelRate'];
      this.metal=params['metal'];
      // ...
    });
    this.buyNowForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      address: ['', [Validators.required, Validators.minLength(5)]],
      // city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      nameOnCard: ['', [Validators.required, Validators.minLength(4)]],
      creditCardNumber: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}\d{4}\d{4}\d{4}$/)],
      ],
      expiryMonth: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])$/)],
      ],
      expiryYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
    });
    this.fetchOrderItems();
    this.orderDetails = this.products;
  }

  // onSubmit(): void {
  //   if (this.buyNowForm.valid) {
  //     // Perform submit action here
  //     Swal.fire({
  //       title: 'Payment successful!',
  //       text: 'Order Placed..!',
  //       icon: 'success',
  //       confirmButtonColor: 'green',
  //     });
  //   } else {
  //     Swal.fire({
  //       title: 'Payment failed',
  //       text: 'Please try again.',
  //       icon: 'error',
  //       confirmButtonColor: 'red',
  //     });
  //   }
  // }

  onSubmit(): void {
    if (this.buyNowForm.valid) {
      // Collect the form data
      const formData: any = {
        fullName: this.buyNowForm.value.fullName,
        email: this.buyNowForm.value.email,
        phoneNumber: this.buyNowForm.value.phoneNumber,
        address:this.buyNowForm.value.address,
        state: this.buyNowForm.value.state,
        zipCode: this.buyNowForm.value.zipCode,
        orderItems: this.orderItems, // Add the orderItems as before
      } ;

      const userEmail = this.auth.getUserEmail();
      formData['userEmail'] = userEmail;

      // Make the HTTP POST request to save the data in db.json
      this.http.post<any>(`${this.apiUrl}/orders`, formData).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          // Handle success response, show success message, etc.
          Swal.fire({
            title: 'Payment successful!',
            text: 'Order Placed..!',
            icon: 'success',
            confirmButtonColor: 'green',
          });
          this.showSuccessMessage = true;
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error creating order:', error);
          // Handle error response, show error message, etc.
          Swal.fire({
            title: 'Payment failed',
            text: 'Please try again.',
            icon: 'error',
            confirmButtonColor: 'red',
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Payment failed',
        text: 'Please try again.',
        icon: 'error',
        confirmButtonColor: 'red',
      });
    }
  }

  fetchOrderItems(): void {
    this.route.queryParams.subscribe((params: Params) => {
      const image = params['image'];
      const jewelName = params['jewelName'];
      const jewelRate = params['jewelRate'];
      const metal=params['metal'];

      // Create an object with the fetched product details
      const productDetails = { image, jewelName, jewelRate, metal };

      // Push the product details object to the orderItems array
      this.orderItems.push(productDetails);
    });
  }

  expiryYearValidator(control: AbstractControl): ValidationErrors | null {
    const currentYear = new Date().getFullYear();
    const expiryYear = control.value;
    if (expiryYear && expiryYear < currentYear) {
      return { expired: true };
    }
    return null;
  }
}
