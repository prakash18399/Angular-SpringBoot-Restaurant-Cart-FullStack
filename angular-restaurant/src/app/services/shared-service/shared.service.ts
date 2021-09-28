import { Injectable } from '@angular/core';
import { Customer } from 'src/app/Customer';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  customer = new Customer();

  constructor() { }

  sendCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomer() {
    return this.customer;
  }

}
