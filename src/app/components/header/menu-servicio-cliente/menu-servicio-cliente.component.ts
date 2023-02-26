import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-servicio-cliente',
  templateUrl: './menu-servicio-cliente.component.html',
  styleUrls: ['./menu-servicio-cliente.component.scss']
})
export class MenuServicioClienteComponent {
  links:{
    href: string,
    text: string
  }[] = [
    {
      href: "store-directory",
      text: "DIRECTORIO DE TIENDAS"
    },
    {
      href: "customer-service",
      text: "SERVICIO AL CLIENTE"
    },
    {
      href: "my-account",
      text: "MI CUENTA"
    },
  ];
}
