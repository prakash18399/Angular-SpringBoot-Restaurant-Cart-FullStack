import { CustomerServiceService } from 'src/app/services/customer-service/customer-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { ItemService } from 'src/app/services/item-service/item.service';
import { Customer } from '../../Customer';
import { SharedService } from 'src/app/services/shared-service/shared.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items: Item[];
  customer = new Customer();
  quantity: number = 1;
  msj: string = "";
  isloggedIn = false;
  username = '';
  role = '';
  id = '';

  updatedCustomer: Customer;

  constructor(private itemService: ItemService, private router: Router, private sharedService: SharedService, private customerService: CustomerServiceService) { }

  ngOnInit(): void {

    this.getAllItems();
    this.getCustomerDetails();
    this.getUpdatedCustomer(Number(this.id));
    this.customer = this.sharedService.getCustomer();
    console.log(this.isloggedIn);

  }

  getUpdatedCustomer(id: number) {
    this.customerService.getCustomerProfile(id).subscribe(
      data => {
        console.log(data);
        this.updatedCustomer = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  getCustomerDetails() {
    this.username = JSON.parse(localStorage.getItem('customerName') || '{}');
    this.role = JSON.parse(localStorage.getItem('customerRole') || '{}');
    this.id = JSON.parse(localStorage.getItem('customerId') || '');
    console.log(this.id, this.username, this.role);
    if (this.role !== '') {
      this.isloggedIn = true;
    } else {
      this.isloggedIn = false;
    }
  }

  logout() {
    this.isloggedIn = false;
    localStorage.clear();
  }

  increase() {
    this.quantity = this.quantity + 1;
  }

  decrease() {
    this.quantity = this.quantity - 1;
  }

  getAllItems() {
    this.itemService.getAllItemsService().subscribe(
      data => {
        this.items = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe(
      data => {
        console.log(data);
        this.getAllItems();
      }
    );
  }

  updateItem(id: number) {
    this.router.navigate(['/items/update', id]);
  }

  getCartItems(id: number) {
    this.sendCustomer();
    this.router.navigate(['customers/cart', id]);
  }

  getItemByCategory(category: string) {
    this.itemService.getItemByCategory(category).subscribe(
      data => {
        console.log(data);
        this.items = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  addToCart(cid: number, pid: number, qty: number, customer: Customer, name: string) {
    this.itemService.addToCart(cid, pid, qty, customer).subscribe(
      data => {
        console.log(data);
        this.msj = `${name} Added to Cart...`;
        setTimeout(() => {
          this.msj = "";
        }, 1000);
        //this.router.navigate(['/customers/cart', cid]);
      },
      error => {
        console.log(error);
      }
    )
  }

  sendCustomer() {
    this.sharedService.sendCustomer(this.customer);
  }

  profile(id: number) {
    this.router.navigate(['/customers/profile/', id]);
  }

  edit(id: number) {
    this.router.navigate(['customers/edit/profile/', id]);
  }
}
