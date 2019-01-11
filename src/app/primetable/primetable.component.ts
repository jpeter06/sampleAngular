import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-primetable',
  templateUrl: './primetable.component.html',
  styleUrls: ['./primetable.component.css']
})
export class PrimetableComponent implements OnInit {

  users: Object;
  msgs: Object[] = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log("data",data);
    }); 
  }

  onRowSelect(event) {
    this.msgs.push({ severity: 'info', 
      summary: 'Usuario seleccionado', detail: 'Nombre:'+event.data.first_name });
  }
}
