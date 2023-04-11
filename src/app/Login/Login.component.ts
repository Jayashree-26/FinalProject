import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm!: FormGroup
 constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private renderer: Renderer2){
  this.renderer.setStyle(document.body,'background-color','#eee4e1');

 }

 ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required]
   })
 }
 login(){
  this.http.get<any>("http://localhost:3000/registerUsers")
  .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(user){
      alert('Login successful !!');
      this.loginForm.reset();
      this.router.navigate(['home'])
    }
    else{
      alert('user not found !!')
    }
  },err=>{
    alert('something went wrong !!')
  })
 }
}
