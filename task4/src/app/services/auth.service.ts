import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  login(username: string, password: string): Observable<User[]> {

    if (!username || !password) {
      return of([]); // Return an empty array if inputs are invalid
    }

    return this.http.get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`);
  }
}