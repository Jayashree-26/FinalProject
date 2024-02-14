import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private apiUrl = 'http://api.example.com/orders'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createOrder(orderData: any): Observable<any> {
    const url = `${this.apiUrl}/create`;
    return this.http.post(url, orderData);
  }

  getOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.get(url);
  }

  updateOrder(orderId: string, orderData: any): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.put(url, orderData);
  }

  deleteOrder(orderId: string): Observable<any> {
    const url = `${this.apiUrl}/${orderId}`;
    return this.http.delete(url);
  }
  placeOrder(items: any[]): Observable<any> {
    // Implement the logic to place the order
    // Return an observable with the order response
    return new Observable<any>(observer => {
      // Simulating an asynchronous request
      setTimeout(() => {
        const orderResponse = { status: 'success', message: 'Order placed successfully' };
        observer.next(orderResponse);
        observer.complete();
      }, 2000);
    });
  }
}
