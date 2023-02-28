import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  img1:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img1",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img1.png",
    alt: "Hush Puppies img1 image",
  };
  
  img2:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img2",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img2.png",
    alt: "Hush Puppies img2 image",
  };
  
  img3:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img3",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img3.png",
    alt: "Hush Puppies img3 image",
  };
  
  img4:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img4",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img4.png",
    alt: "Hush Puppies img4 image",
  };
  
  img5:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img5",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img5.png",
    alt: "Hush Puppies img5 image",
  };
  
  img6:{
    name:string,
    title:string,
    src:string,
    alt:string,
  } = {
    name: "img6",
    title: "Hush Puppies Company",
    src: "../../../assets/img/img6.png",
    alt: "Hush Puppies img6 image",
  };
  
}
