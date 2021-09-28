import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { RegistrationService } from 'src/app/services/registration-service/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();
  msj = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registrationService.registerService(this.customer).subscribe(
      data => {
        console.log(data);
        this.customer = data;
        this.msj = 'Registration successful';
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.msj = 'Customer already exists';
      }
    )
  }

}
