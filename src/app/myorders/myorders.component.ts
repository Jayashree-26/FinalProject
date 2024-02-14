import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css'],
})
export class MyordersComponent implements OnInit {
  orders: any[] = [];

  constructor(
    private http: HttpClient,
    private api: ApiService,
    private auth: AuthService,
    private renderer:Renderer2
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

  cancelOrder(orderId: number): void {
    this.api.cancelOrder(orderId).subscribe(
      (response) => {
        console.log('Order cancelled successfully:', response);
        this.fetchOrders(); // Update the orders list after cancellation
        this.showCancelSuccessAlert(); // Show the successful cancellation alert
      },
      (error) => {
        console.error('Error cancelling order:', error);
      }
    );
  }

  showCancelSuccessAlert(): void {
    alert('Order cancellation successful!');
  }
}
