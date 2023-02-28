import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Zapato } from 'src/app/classes/Zapato';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  referencia:string = "";
  
  zapatos:{data:[]} = {data:[]}; 

  zapato:Zapato = {
    nombre: "",
    precio: 0,
    referencia: "",
    foto: ""
  };

  miniaturas: Zapato[] = [];

  color_ref:Zapato = new Zapato();

  tallas:number[] = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  random_count:number = Math.floor(Math.random() * 6);

  random_button:number = Math.floor(Math.random() * 6);
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private httpClient:HttpClient,
    private router:Router,
  ){}

  ngOnInit() {
    this.activatedRoute.url.subscribe(urlSegmentos => {
      this.referencia = urlSegmentos[1].path;
      this.getZapatos().subscribe( response => {
        this.zapatos = response;
        this.getZapatoData();
      } );
    });
  }

  ngOnDestroy() {
  }

  getZapatos(){
    return this.httpClient.get<any>("./assets/zapato.json");
  }

  getZapatoData() {
    let zapato = this.zapatos.data.find( zapato => zapato["referencia"] == this.referencia ) || this.zapato;
    this.miniaturas = this.zapatos.data.slice(Math.floor(Math.random()*10), 6)
    this.miniaturas.unshift(zapato);
    this.color_ref = zapato;
    this.zapato.nombre = zapato!["nombre"];
    this.zapato.precio = zapato!["precio"];
    this.zapato.referencia = zapato!["referencia"];
    this.zapato.foto = zapato!["foto"];
  }

  changeImg(evento: any) {
    this.zapato.foto = evento.target["src"].split("/").pop()
  }

  size_guide(evento:Event) {
    evento.preventDefault();
    alert("GUIA DE TALLAS");
  }

}
