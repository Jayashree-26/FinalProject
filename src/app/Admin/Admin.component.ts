import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './Admin.component.html',
  styleUrls: ['./Admin.component.css'],
})
export class AdminComponent implements OnInit {
  public totalUsers: number = 0;
  public allData: any = [];
  orderlist: any[] = []; // Initialize an empty array to store the orders
  totalOrders: number = 0; // Initialize the total number of orders as 0
  constructor(private http: HttpClient,private api:ApiService) {
    this.showUser();
  }

  showUser() {
    this.http
      .get<any>('http://localhost:3000/registerUsers')
      .subscribe((data) => {
        this.allData = data;
        console.log(data);
        this.getUsersCount();
      });
  }

  ngOnInit() {
    this.api.getOrders().subscribe((data) => {
      this.orderlist = data;
      this.totalOrders = this.orderlist.length; // Calculate the total number of orders
    });
  }
  getUsersCount() {
    this.totalUsers = this.allData.length;
  }

  loadOrderList() {
    // Fetch the orderlist data from your API or db.json
    this.api.getOrderList().subscribe((data) => {
      this.orderlist = data;
    });
  }
}
