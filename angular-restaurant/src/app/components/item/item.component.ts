import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item-service/item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item = new Item();
  msj: String;


  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  addItem() {
    this.itemService.addItem(this.item).subscribe(
      data => {
        console.log(data);
        this.msj = 'Added item to menu';
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
        this.msj = 'Unable to Add';
      }
    )
  }
}
