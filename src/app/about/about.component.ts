import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() ff:Function;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  callParent(){ 
    if(this.ff!=null)
     this.ff('aa');
    else console.log("sin padre definido");
    this.messageService.add({ severity: 'warn', 
    summary: 'Llamando al Padre'
    , detail: this.ff?"PAdre encontrado :-)":"Padre no encontrado" });
  }
    
}
