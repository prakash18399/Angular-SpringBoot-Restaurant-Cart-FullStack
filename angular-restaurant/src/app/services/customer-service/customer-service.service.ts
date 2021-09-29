import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Customer } from '../../Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  apiUrl = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) { }


  getCustomerProfile(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/profile/${id}`);
  }

  editCustomerProfile(id: number, customer: Customer): Observable<any> {
    return this.http.put(`${this.apiUrl}/edit/profile/${id}`, customer);
  }

}
