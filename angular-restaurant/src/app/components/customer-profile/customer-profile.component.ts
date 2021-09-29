import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from './../../services/customer-service/customer-service.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../Customer';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  customer = new Customer();
  id: number;

  constructor(private customerService: CustomerServiceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.getCustomerProfile();
  }

  home() {
    this.route.navigate(['/']);
  }

  getCustomerProfile() {
    this.customerService.getCustomerProfile(this.id).subscribe(
      data => {
        console.log(data);
        this.customer = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  editCustomerProfile(id: number, customer: Customer) {
    this.customerService.editCustomerProfile(id, customer).subscribe(
      data => {
        console.log(data);
        this.customer = data;
      },
      error => {
        console.log(error);
      }
    )
  }

}
