import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  orders: any[] = [];
  selectedOrder: any; // Add this property to store the selected order details
  loggedInUser: any;

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private renderer:Renderer2,
    private auth: AuthService,

  ) {
    this.renderer.setStyle(document.body, 'background-color', '#eee4e1');
  }

  ngOnInit(): void {
    this.fetchOrders();

  }

  // fetchOrders(): void {
  //   this.api.getOrders().subscribe((orders) => {
  //     this.orders = orders;
  //   });
  // }

  fetchOrders(): void {
    this.api.getOrders().subscribe(
      (orders) => {
        console.log('API Response:', orders);
        this.orders = orders;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }


  showPopup(order: any): void {
    this.selectedOrder = order;

    // Get the logged-in user details from AuthService
    this.loggedInUser = this.auth.getLoggedInUser();

    // Open the popup
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  closePopup(): void {
    this.selectedOrder = null;
  }
}
