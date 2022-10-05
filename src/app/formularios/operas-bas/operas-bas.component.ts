import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  resultado:number=0;
 

  num3='';
  resultado2:number=0;
  print="";
  text:string[]=[];

  sumar(){
    this.resultado=parseInt(this.num1)+parseInt(this.num2);
  }

  multiplicar(){
    let num3=parseInt(this.num3);
    let text:string[]=[];
    for (let i=1; i<11; i++){
      this.resultado2=num3*i;
      text.push(this.num3+" x "+i+" = "+this.resultado2)
    }
    this.text=text;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
