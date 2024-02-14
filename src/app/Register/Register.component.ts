import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../User.service';
import { ConfirmedValidator } from '../confirm.validators';
import { environment } from 'src/environment';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css'],
})
export class RegisterComponent implements OnInit {
  repeatPass: string = 'none';
  username: any = '';
  email: any = '';
  password: any = '';
  confirm_password: any = '';
  public registerForm!: FormGroup;
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService,
    private renderer: Renderer2
  ) {

    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }



  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({

      username: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{7,15}$/),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/),
      ]),
      confirm_password: new FormControl('', [Validators.required]),
    },{validator:ConfirmedValidator('password','confirm_password')});
  }

  register() {
    this.http.get<any>(`${this.apiUrl}/registerUsers`).subscribe(res => {
      const user = res.find((result: any) => {
        return result.email === this.registerForm.value.email;
      });

      if (user) {
        alert("Email Already Exists");
      }

      else {
        this.http.post<any>(`${this.apiUrl}/registerUsers`, this.registerForm.value)
          .subscribe((data) => {
            alert("Registration Successful!!");
            this.router.navigate(['/login']);
          });
        }
      });
    }
  }






