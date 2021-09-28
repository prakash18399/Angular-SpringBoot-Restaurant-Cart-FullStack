import { Customer } from './../../Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  apiLoginUrl = 'http://localhost:8080/login';
  apiRegisterUrl = 'http://localhost:8080/register'

  constructor(private http: HttpClient) {

  }

  loginService(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiLoginUrl, customer);
  }

  registerService(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiRegisterUrl, customer);
  }
}
