import { Component, OnInit } from '@angular/core';

import { Zapato } from 'src/app/classes/Zapato';

import { ShopCartService } from 'src/app/services/shop-cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  cart:Zapato[] = [];

  constructor(private shopCartService:ShopCartService){}
  
  ngOnInit() {
    this.verifyCart();
  }

  verifyCart() {
    // if (localStorage.getItem("cart") != null && localStorage.getItem("cart")!.indexOf("[") == 0 ) {
    //   this.cart = JSON.parse(localStorage.getItem("cart")!);
    // }
    // else {
    //   localStorage.setItem("cart", JSON.stringify(this.cart));
    // }
    this.shopCartService.myCart$.subscribe( item => {
      this.cart = item;
    })
  }

}
