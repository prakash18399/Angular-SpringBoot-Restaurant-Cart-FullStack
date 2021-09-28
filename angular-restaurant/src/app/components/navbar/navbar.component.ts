import { SharedService } from './../../services/shared-service/shared.service';
import { Customer } from './../../Customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customer = new Customer();
  isloggedIn: boolean;
  username = '';
  role = '';
  id = '';

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getCustomer();
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    this.username = JSON.parse(localStorage.getItem('customerName') || '{}');
    this.role = JSON.parse(localStorage.getItem('customerRole') || '{}');
    this.id = JSON.parse(localStorage.getItem('customerId') || '{}');
    console.log(this.id, this.username, this.role);
    if (this.username !== null) {
      this.isloggedIn = true;
    }
  }

  getCustomer() {
    this.customer = this.sharedService.getCustomer();
    console.log("Customer" + this.customer.username);
  }

  logout() {
    this.isloggedIn = false;
    localStorage.clear();
  }

}
