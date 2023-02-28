import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Zapato } from '../classes/Zapato';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  cart:Zapato[] = [];
  totalCart = 0;

  private myCart:BehaviorSubject<Zapato[]> = new BehaviorSubject<Zapato[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }



  
  add_to_cart(item: Zapato) {
    // this.cart = JSON.parse(localStorage.getItem("cart")!);
    this.cart.push(item);
    this.myCart.next(this.cart);
  }

  get_cart_count() {
    return this.cart.length;
  }

  empty_cart() {
    this.cart = [];
    this.myCart.next(this.cart);
  }

  verifyCart() {
    if (localStorage.getItem("cart") != null && localStorage.getItem("cart")!.indexOf("[") == 0 ) {
      this.cart = JSON.parse(localStorage.getItem("cart")!);
    }
    else {
      localStorage.setItem("cart", JSON.stringify(this.cart));
    }
  }

}
