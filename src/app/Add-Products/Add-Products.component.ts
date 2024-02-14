import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { datamodel } from '../datatype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Add-Products',
  templateUrl: './Add-Products.component.html',
  styleUrls: ['./Add-Products.component.css'],
})
export class AddProductsComponent implements OnInit {
  addProduct!: FormGroup;
  productMessage: undefined | string;
  addproductMessage: undefined | string;
  data: undefined | datamodel[];

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addProduct = this.formbuilder.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      category: ['', Validators.required],

    });
    this.viewProduct();
  }
  addProducts(data: datamodel) {
    // console.log(data);
    this.api.addProducts(data).subscribe((res) => {
      alert('Product Added!!');
      this.addProduct.reset();
      this.router.navigate(['/add']);

    });
    this.viewProduct();
  }

  viewProduct() {
    this.api.viewProduct().subscribe((res) => {
      this.data = res;
    });
  }

  deleteProduct(id: number) {
    this.api.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.productMessage = 'Product Deleted Successfullyy';
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
}
