import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  valor:string="valor";
  color:string="rojo";
  color2:string="rojo";
  entrada:string="";

  constructor() { }

  ngOnInit() {
  }

  changeColor2(){
    this.color2= this.color2=="naranja"?"rojo":"naranja";
  }
  childCall( val){ alert("Cok:"+val+" "+this.color)}

}
