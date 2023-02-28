import { Component, OnInit } from '@angular/core';

import { Zapato } from 'src/app/classes/Zapato';

import { ShopCartService } from 'src/app/services/shop-cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent {

  constructor(private shopCartService:ShopCartService){}

  ngOnInit(){
    this.shopCartService.myCart$.subscribe( cart => {
      this.cart = cart;
    });
  }

  cart:Zapato[] = [new Zapato()];

  emptyCart() {
    this.shopCartService.empty_cart();
  }
}
