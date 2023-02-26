import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tienda',
  templateUrl: './menu-tienda.component.html',
  styleUrls: ['./menu-tienda.component.scss']
})
export class MenuTiendaComponent {
  links:{
    href: string,
    text: string
  }[] = [
    {
      href: "/him",
      text: "HOMBRE"
    },
    {
      href: "/her",
      text: "MUJER"
    },
    {
      href: "/blog",
      text: "BLOG"
    },
    {
      href: "/history",
      text: "HISTORIA"
    },
    {
      href: "/stores",
      text: "TIENDAS"
    },
  ];
}
