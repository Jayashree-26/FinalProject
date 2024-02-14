import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../datatype';

@Component({
  selector: 'app-Update',
  templateUrl: './Update.component.html',
  styleUrls: ['./Update.component.css'],
})
export class UpdateComponent implements OnInit {
  public dataid!: number;
  public fetchdata: undefined | datamodel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']('id');
    });

    // Fetch data from API based on dataid
    this.api.fetchdata(this.dataid).subscribe(
      (data: datamodel) => {
        this.fetchdata = data; // Make sure this assignment is successful
      },
      (error) => {
        console.error(error);
      }
    );
  }
  Update() {
    if (this.fetchdata) { // Check if fetchdata is defined
      this.api
        .updateProduct(this.fetchdata, this.dataid)
        .subscribe((res: datamodel) => {
          alert('Updated Successfully!!');
          this.router.navigate(['/add']);
        });
    } else {
      console.error('fetchdata is undefined'); // Print an error message for debugging
    }
  }

}
