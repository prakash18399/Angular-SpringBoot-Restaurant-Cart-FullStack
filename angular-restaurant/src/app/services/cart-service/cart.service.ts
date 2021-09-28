import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'http://localhost:8080/customers/cart';

  constructor(private http: HttpClient) { }

  getCartItemsByCustomer(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  deleteItemFromCart(cid: number, id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${cid}/delete/item/${id}`, { responseType: 'text' });
  }

}
