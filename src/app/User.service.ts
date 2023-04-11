import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: any = 'http://localhost:3000/userProfile';

  constructor(private http: HttpClient) {}

  addUser(body: any) {
    console.log(body);
    return this.http.post<any>(this.url,body);
  }

  retrieveUser() {
    return this.http.get(this.url);
  }

  deleteUser(id: any) {
    return this.http.delete(this.url, id);
  }

  retrieveOneUser(id:any){
    console.log(this.url+"/"+id);
    return this.http.get(this.url+"/"+id);
  }

  updateUser(id: any, data: any) {
    return this.http.patch(this.updateUser + "/" + id, data);
  }
}
