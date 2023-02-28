import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  logo_img:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "logo",
    title: "Hush Puppies Company",
    src: "./assets/img/logo.png",
    alt: "Hush Puppies logo image",
  }
}
