import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environment';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
  styles: [
    'input.ng-invalid{border-bottom: 2px solid red;} input.ng-valid{border-bottom: 2px solid green;}',
  ],
})
export class ForgotpasswordComponent implements OnInit {
  email: any = '';
  emailNotFound: boolean = false;
  emailExists: boolean = false;
  newPassword: any = '';
  userId: number | undefined;
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding
  newPass: any = '';
  confirm_password: any = '';
  retUrl: any = 'login';
  forgotemail: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  showPassword = false;

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  resetpass = this.formBuilder.group({
    newPass: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        ),
      ],
    ],
    confirm_password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
        ),
      ],
    ],
  });

  ngOnInit() {}

  // Popup

  isPopupOpen = true;

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.router.navigate(['/login']);
  }

  // ForgotPassword

  checkEmail() {
    this.emailNotFound = false;
    this.emailExists = false;

    this.http
      .get<any>(`${this.apiUrl}/registerUsers`, {
        params: { email: this.email },
      })
      .subscribe((response) => {
        if (response.length > 0) {
          this.emailExists = true;
          this.userId = response[0].id;
          alert('Email ID granted');
        } else {
          this.emailNotFound = true;
        }
      });
  }

  resetPassword() {
    const updatedUser = {
      password: this.newPassword,
      confirm_password: this.confirm_password,
    };

    this.http
      .patch(`${this.apiUrl}/registerUsers/${this.userId}`, updatedUser)
      .subscribe(() => {
        alert('Password updated successfully');
        this.router.navigate(['/login']);
      });
  }

  passwordsDoNotMatch(): boolean {
    return this.newPassword !== this.confirm_password;
  }
}
