import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolitos',
  templateUrl: './cinepolitos.component.html',
  styleUrls: ['./cinepolitos.component.css']
})
export class CinepolitosComponent implements OnInit {

  display:string='none';
  display2:string='none';

  name:string='';
  compra:number=0;
  tarjeta:number=0;
  boletos:number=0;
  resultado:number=0;

  mensaje:string='';

  compraBoletos(){
    let precio = 12000;
    let boletosPermitidos = (this.compra * 7);
    let total = 0;
    let texto = '';

    if(this.boletos <= boletosPermitidos){
      total = this.boletos * 12000;

      if(this.boletos>5){
        total -= (total * 0.15);
      }
      else if (this.boletos>=3){
        total -= (total * 0.10);
      }
      if(this.tarjeta == 1){
        total -= (total * 0.10);
      }
      
      texto = '';
      this.display = 'block';
    }else{
      texto = 'Sólo puede comprar 7 boletos por comprador';
      this.display='none';
    }

    if (this.boletos == 0 || this.name == '' || this.compra == 0 || this.tarjeta == 0 || this.boletos == 0){
      this.display='none';
      this.display2='block';
      total = 0;
    }else{
      this.display2='none';
    }

    this.mensaje = texto;
    this.resultado = total;
  }

  limpiar(){
    this.display='none';
    this.display2='none';
    this.name='';
    this.compra=0;
    this.tarjeta=0;
    this.boletos=0;
    this.resultado=0;
    this.mensaje='';
  }

  constructor() { }

  ngOnInit(): void {
  }

}


