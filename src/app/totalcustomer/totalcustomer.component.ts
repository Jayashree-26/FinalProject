import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment';

@Component({
  selector: 'app-totalcustomer',
  templateUrl: './totalcustomer.component.html',
  styleUrls: ['./totalcustomer.component.css']
})
export class TotalcustomerComponent implements OnInit {
  public registration: any = {};
  public allData: any = [];
  public totalUsers: number = 0;
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding

  constructor(private http:HttpClient) {
    this.showUser();
    this.getUsersCount();
   }
  save() {
    this.http
      .post<any>(`${this.apiUrl}/registerUsers`, this.registration)
      .subscribe((data) => {
        this.showUser();
      });
  }
  showUser() {
    this.http
      .get<any>(`${this.apiUrl}/registerUsers`)
      .subscribe((data) => {
        this.allData = data;
        console.log(data);
        this.getUsersCount();
      });
  }

  ngOnInit() {
    this.showUser();
  }
  getUsersCount() {
    this.totalUsers = this.allData.length;

}
}


