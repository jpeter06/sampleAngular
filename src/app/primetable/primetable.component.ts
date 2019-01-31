import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-primetable',
  templateUrl: './primetable.component.html',
  styleUrls: ['./primetable.component.css']
})

export class PrimetableComponent implements OnInit {

  users: Object;
  msgs: Object[] = [];

  constructor(private data: DataService,
              private messageService: MessageService) { }

    ngOnInit() {
      this.realizarPeticion();
      /*  
      this.data.getUsers().subscribe(data => {
        console.log("peticion recibida",data)
        this.users = data;
      })
      */
      console.log("peticion realizada")
    }
  
    realizarPeticion() {
      let self=this;
      this.data.getUsers().subscribe({
        next(data) { console.log("peticion recibida (next)");
        console.log(data);
              self.users = data; },
        error(err) { console.error('Error: ' + err); }
        });
    }
            
    onRowSelect(event) {
    this.messageService.add({ severity: 'info', 
      summary: 'Usuario seleccionado', detail: 'Nombre:'+event.data.first_name });
  }
}
