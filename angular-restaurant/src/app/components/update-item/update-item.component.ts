import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/Item';
import { ItemService } from 'src/app/services/item-service/item.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  id: number;
  item: Item;

  constructor(private route: ActivatedRoute, private router: Router,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.item = new Item();
    this.id = this.route.snapshot.params['id'];

    this.itemService.getItem(this.id)
      .subscribe(data => {
        console.log(data)
        this.item = data;
      }, error => console.log(error));
  }

  goToMenu() {
    this.router.navigate(['/']);
  }

  updateItem() {
    this.itemService.updateItem(this.id, this.item)
      .subscribe(data => {
        console.log(data);
        this.item = new Item();
        this.router.navigate(['/']);
      }, error => console.log(error));
  }

}

