import { SharedService } from './../../services/shared-service/shared.service';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Customer } from './../../Customer';

import { RegistrationService } from '../../services/registration-service/registration.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customer = new Customer();
  msj = '';


  constructor(private registrationService: RegistrationService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  loginUser() {
    this.registrationService.loginService(this.customer).subscribe(
      data => {
        this.customer = data;
        console.log(this.customer);
        this.msj = 'Login successful';
        localStorage.setItem('customerName', JSON.stringify(this.customer.username));
        localStorage.setItem('customerRole', JSON.stringify(this.customer.role));
        localStorage.setItem('customerId', JSON.stringify(this.customer.id));
        this.sharedService.sendCustomer(this.customer);
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.msj = 'Invalid credentials';
      }
    )
  }

  sendCustomer() {
    this.sharedService.sendCustomer(this.customer);
  }


}
