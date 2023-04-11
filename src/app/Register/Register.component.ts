import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  public registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[a-zA-Z].*'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      confirm_password: new FormControl('', [Validators.required]),
    });
  }

  register() {
    this.http
      .post<any>('http://localhost:3000/registerUsers', this.registerForm.value)
      .subscribe(
        (res) => {
          alert('Registered successfully !!');
          this.registerForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          alert(['something went wrong !!']);
        }
      );
  }

  passwordchecking() {
    if (this.password.value == this.confirm_password.value) {
      console.log(this.registerForm.valid);
      this.repeatPass = 'none';
    } else {
      this.repeatPass = 'inline';
    }
  }

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirm_password(): FormControl {
    return this.registerForm.get('confirm_password') as FormControl;
  }
}
