import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { datamodel } from './datatype';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private apiUrl = 'http://localhost:3000';
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding
  constructor(public http: HttpClient) {}

  goldring() {
    return this.http.get<any>(`${this.apiUrl}/goldring`).pipe(
      map((res: any) => {
        console.log('API Response:', res); // Add this line
        return res;
      })
    );
  }

  goldchain() {
    return this.http.get<any>(`${this.apiUrl}/goldchain`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  goldbangles() {
    return this.http.get<any>(`${this.apiUrl}/goldbangles`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  goldearring() {
    return this.http.get<any>(`${this.apiUrl}/goldearring`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  goldbracelet() {
    return this.http.get<any>(`${this.apiUrl}/goldbracelet`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  silvercoins() {
    return this.http.get<any>(`${this.apiUrl}/silvercoins`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  goldcoins() {
    return this.http.get<any>(`${this.apiUrl}/goldcoins`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  silverring() {
    return this.http.get<any>(`${this.apiUrl}/silverring`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  silverchain() {
    return this.http.get<any>(`${this.apiUrl}/silverchain`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  silverbangles() {
    return this.http.get<any>(`${this.apiUrl}/silverbangles`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  silverearring() {
    return this.http.get<any>(`${this.apiUrl}/silverearring`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  silverbracelet() {
    return this.http.get<any>(`${this.apiUrl}/silverbracelet`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  diamondring() {
    return this.http.get<any>(`${this.apiUrl}/diamondring`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  diamondchain() {
    return this.http.get<any>(`${this.apiUrl}/diamondchain`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  diamondbangles() {
    return this.http.get<any>(`${this.apiUrl}/diamondbangles`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  diamondearring() {
    return this.http.get<any>(`${this.apiUrl}/diamondearring`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  diamondbracelet() {
    return this.http.get<any>(`${this.apiUrl}/diamondbracelet`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  gifts() {
    return this.http.get<any>(`${this.apiUrl}/gifts`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  coins() {
    return this.http.get<any>(`${this.apiUrl}/coins`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  kids() {
    return this.http.get<any>(`${this.apiUrl}/kids`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  mens() {
    return this.http.get<any>(`${this.apiUrl}/mens`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getproduct() {
    return this.http.get<any>(`${this.apiUrl}/gold`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getproducts() {
    return this.http.get<any>(`${this.apiUrl}/silver`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // addproduct
  addProducts(data: datamodel) {
    return this.http.post<datamodel>(`${this.apiUrl}/datatype`, data);
  }

  // viewproduct
  viewProduct() {
    return this.http.get<datamodel[]>(`${this.apiUrl}/datatype`);
  }

  //fetchdata
  fetchdata(id: number) {
    return this.http.get<datamodel>(`${this.apiUrl}/datatype/`+ id);
  }

  // deleteproduct
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/datatype/` + id);
  }

  // updateproduct
  updateProduct(data: datamodel, id: number) {
    return this.http.put<datamodel>(`${this.apiUrl}/datatype/` + id, data);
  }

  orders() {
    return this.http.get<any>(`${this.apiUrl}/orders`).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/orders`).pipe(
      tap((response) => console.log('API Response:', response)),
      catchError((error) => {
        console.error('Error fetching orders:', error);
        return throwError(error);
      })
    );
  }

  getOrderList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orderlist`);
  }

  // Cancel an order
  cancelOrder(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/orders/${orderId}`);
  }

  addOrderDetails(orderDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/order-details`, orderDetails);
  }
  getOrderDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/order-details`);
  }
  addOrderWithUser(orderWithUser: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/orders`, orderWithUser);
  }
  getUserOrders(): Observable<any> {
    // Make an HTTP request to fetch the user's orders from the backend API
    return this.http.get<any>(`${this.apiUrl}/order-details`);
  }

  // Inside ApiService class
  // cancelOrder(orderId: number): Observable<any> {
  //   const endpoint = `${this.apiUrl}/orders/${orderId}`;
  //   return this.http.delete<any>(endpoint);
  // }

  addOrder(order: any) {
    return this.http.post<any>(`${this.apiUrl}/orders`, order);
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/place-order`, order);
  }

  updatePassword(email: string, newPassword: string): Observable<any> {
    const body = { email, password: newPassword };
    return this.http.put<any>(`${this.apiUrl}/registerUsers`, body);
  }
}
