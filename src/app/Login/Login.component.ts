import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  retUrl: string = 'login';
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding
  returnUrl: string = '/'; // Default returnUrl to the home page

  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private renderer: Renderer2,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {

    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.route.queryParams.subscribe(params => {
      this.returnUrl = params['returnUrl'] || '/';
    });
  }

  onLogin() {
    this.http.get<any>(`${this.apiUrl}/registerUsers`).subscribe(
      (data) => {
        const user = data.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login successful!!');
          this.loginForm.reset();
          this.authService.load(user);
          this.router.navigateByUrl(this.returnUrl);
          return; // Add this line to stop the execution of further code
        } else if (
          this.loginForm.value.email === environment.adminEmail &&
          this.loginForm.value.password === environment.adminPassword
        ) {
          alert('Welcome!!');
          this.loginForm.reset();
          this.authService.load({ id: 'admin-id', email: environment.adminEmail});
          this.router.navigate(['/admindashboard']);
          return; // Add this line to stop the execution of further code
        } else {
          alert('User not found');
        }
      },
      (err) => {
        alert('Please enter valid Email or Password!!');
      }
    );
  }
}
