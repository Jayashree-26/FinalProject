import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email: string | undefined;
  password: string | undefined;
  loggedIn: any;
  // private apiUrl = 'http://localhost:3000/registerUsers';
  private apiUrl = environment.apiUrl; // Use the environment.apiUrl instead of hardcoding


  constructor(private client:HttpClient,private http: HttpClient, private router:Router) {}
  addUserInformation(body:any){

    return this.client.post(`${this.apiUrl}/registerUsers`,body);

  }
  getUser(): Observable<any> {
    const url = (`${this.apiUrl}/registerUsers`);
    return this.http.get(url);
  }

  login(username: string, password: string) {
    // Send the login request to the server and handle the response
    this.http.post('/api/login', { username, password })
      .subscribe((response: any) => {
        if (response.success) {
          // Store the user information
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
      });
  }
  authenticateUser(email: string, password: string): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any[]) => {
        return data.find(
          (user: any) => user.email === email && user.password === password
        );
      })
    );
  }

}

