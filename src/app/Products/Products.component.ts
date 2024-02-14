import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { datamodel } from '../datatype';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Products',
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent implements OnInit {
  addProduct!:FormGroup;

  constructor(private formbuilder:FormBuilder,private api:ApiService, private router:Router) { }

  ngOnInit():void {
    this.addProduct=this.formbuilder.group({
      image:['',Validators.required],
      name:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      category:['',Validators.required],

    })
    // this.viewProduct();
    }
    addProducts(data:datamodel){
       this.api.addProducts(data).subscribe((res=>{
        alert("Product Added!!");
        this.router.navigate(["/add"]);
        this.addProduct.reset();
       }))
    }

}
