import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  
  constructor() { }

  showImage():void{
    this.muestraImg =! this.muestraImg;
  }

  ngOnInit(): void {
  }

  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"2 Puertas, familiar",
      "Year":"febrero 3 2020",
      "Precio":120000,
      "Color":"Azúl Chiclamino",
      "Marca":"Nissan",
      "ImagenUrl":"https://latam-editorial.pxcrush.net/soloautos/general/editorial/nissan-sentra-2020-04-o5tpe.jpg?pxc_width=900&pxc_height=600&pxc_method=crop&pxc_format=auto"
    },
    {
      "productoId":2,
      "Modelo":"Soul",
      "Descripcion":"Usado del año",
      "Year":"diciembre 26 2021",
      "Precio":450000,
      "Color":"Azúl Metálico",
      "Marca":"KIA",
      "ImagenUrl":"https://img.automexico.com/crop/840x640/2021/07/17/2gS0vPdI/kia-soul-2022-av-801c.jpg"
    },
    {
      "productoId":3,
      "Modelo":"Accord",
      "Descripcion":"Usado con fallas frecuentes",
      "Year":"enero 18 2012",
      "Precio":80000,
      "Color":"Gris",
      "Marca":"Honda",
      "ImagenUrl":"https://img.automexico.com/crop/535x349/2019/02/22/ab045c0d-4-0207.jpg"
    }
  ]

}

