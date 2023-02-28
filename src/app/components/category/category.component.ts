import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  tallas:number[] = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

  filtros:{
    title:string, 
    conditions:{
      text: string, 
      count: number
    }[]
  }[] = [
    {
      title: "PRECIO",
      conditions: [
        {
          text: "$150.000 - $300.000",
          count: 10
        },
        {
          text: "$300.000 - $450.000",
          count: 24
        },
      ],
    },
    {
      title: "MATERIAL",
      conditions: [
        {
          text: "Cuero",
          count: 18
        },
        {
          text: "Nubuck",
          count: 8
        },
      ],
    },
    {
      title: "COLOR",
      conditions: [
        {
          text: "NEGRO",
          count: 12
        },
        {
          text: "AZUL",
          count: 12
        },
        {
          text: "CAFÉ",
          count: 12
        },
        {
          text: "ORO",
          count: 12
        },
      ],
    },
    {
      title: "TECNOLOGÍA",
      conditions: [
        {
          text: "H2POFlex",
          count: 5
        },
        {
          text: "BioBevel",
          count: 1
        },
        {
          text: "FlexGrove",
          count: 3
        },
      ],
    },
  ]

  constructor (private httpClient:HttpClient) {}


  ngOnInit(): void {
    this.getZapatos().subscribe( response => this.zapatos = response );
  }

  ngOnDestroy() {
  }

  getZapatos(){
    return this.httpClient.get<any>("./assets/zapato.json");
  }

  zapatos:{data:[]} = {data:[]}; 


}
