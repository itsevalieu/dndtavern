import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  fetchUsers() {
    return this.http.get(`${environment.api_url}/api/users`);
  }
  createUser(userData) {
    return this.http.post(`${environment.api_url}/api/users`, userData);

  }
}
