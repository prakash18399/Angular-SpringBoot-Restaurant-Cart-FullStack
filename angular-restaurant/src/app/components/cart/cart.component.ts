import { Customer } from './../../Customer';
import { SharedService } from './../../services/shared-service/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../../Cart';
import { CartService } from 'src/app/services/cart-service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  id: number;
  customer = new Customer();
  cartItems: Cart[];

  constructor(private route: ActivatedRoute,
    private cartService: CartService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCartItems();
    this.customer = this.sharedService.getCustomer();
  }

  getCartItems() {
    this.cartService.getCartItemsByCustomer(this.id).subscribe(
      data => {
        //console.log("Cart is" + data);
        this.cartItems = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  goToMenu() {
    this.sendCustomer();
    this.router.navigate(['/']);
  }

  sendCustomer() {
    this.sharedService.sendCustomer(this.customer);
  }

  deleteItemFromCart(cid: number, id: number) {
    this.cartService.deleteItemFromCart(cid, id).subscribe(
      data => {
        console.log("Item Deleted From Cart", + data);
        this.getCartItems();
      },
      error => {
        console.log(error);
      }
    )

  }

}
