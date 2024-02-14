import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './datatype';
import { Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable()
export class ProductService {

  // private apiUrl = 'http://localhost:3000/orders';
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding


  constructor(private http: HttpClient) {}
  addProduct(data: datamodel) {
    return this.http.post(`${this.apiUrl}/products`, data);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/datatype/${id}`);
  }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    const updateUrl = `${this.apiUrl}/${orderId}/status`;
    return this.http.put<any>(updateUrl, { status });
  }
}
