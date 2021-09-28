import { Customer } from "./Customer";
import { Item } from "./Item";

export class Cart {
    id: number;
    customer: Customer;
    item: Item;
    quantity: number;

    constructor() {
    }

}
