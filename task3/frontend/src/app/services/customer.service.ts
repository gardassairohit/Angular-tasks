import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private API_SERVER = "http://localhost:3000/api/customers";
  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.API_SERVER);
  }

  getById(id: string): Observable<Customer>{
    return this.http.get<Customer>(this.API_SERVER + '/' + id);
  }

  post(customer: Customer): Observable<Customer>{
    return this.http.post<Customer>(this.API_SERVER, customer);
  }

  put(id: string, customer: Customer): Observable<Customer>{
    return this.http.put<Customer>(this.API_SERVER + '/' + id, customer);
  }
  delete(id: string): Observable<Customer>{
    return this.http.delete<Customer>(this.API_SERVER + '/' + id);
  }
}
