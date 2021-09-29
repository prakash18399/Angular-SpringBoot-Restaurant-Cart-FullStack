import { Customer } from './../../Customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/services/customer-service/customer-service.service';

@Component({
  selector: 'app-customer-editprofile',
  templateUrl: './customer-editprofile.component.html',
  styleUrls: ['./customer-editprofile.component.css']
})
export class CustomerEditprofileComponent implements OnInit {

  customer = new Customer();
  id: number;

  constructor(private customerService: CustomerServiceService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.customerService.getCustomerProfile(this.id).subscribe(
      data => {
        console.log("old customer" + data);
        this.customer = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  updateCustomer() {
    this.customerService.editCustomerProfile(this.id, this.customer).subscribe(
      data => {
        console.log("new customer" + data);
        this.customer = new Customer();
        this.route.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    )
  }

  goToMenu() {
    this.route.navigate(['/']);
  }

}
