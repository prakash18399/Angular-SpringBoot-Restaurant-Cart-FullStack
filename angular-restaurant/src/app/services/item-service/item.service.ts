import { Customer } from './../../Customer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  getAllItemsService(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/items/add`, item);
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/items/${id}`);
  }

  updateItem(id: number, item: Item): Observable<any> {
    return this.http.post(`${this.baseUrl}/items/update/${id}`, item);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/items/delete/${id}`, { responseType: 'text' });
  }

  getItemByCategory(category: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items/category/${category}`);
  }

  addToCart(cid: number, pid: number, qty: number, customer: Customer): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/customers/${cid}/cart/add/${pid}/quantity/${qty}`, customer);
  }
}
