import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {MessageService, ConfirmationService, DialogService} from 'primeng/api';
import { UserFormComponent } from '../user-form/user-form.component';



@Component({
  selector: 'app-primetable2',
  templateUrl: './primetable2.component.html',
  styleUrls: ['./primetable2.component.css']
})

export class Primetable2Component implements OnInit {

  users: Object;
  columns: any[];

  constructor(private data: DataService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService,
              public dialogService: DialogService) { }

    ngOnInit() {
      this.realizarPeticion();
      this.columns = [
        { field: 'id', header: 'Id' },
        { field: 'first_name', header: 'Nombre' },
        { field: 'last_name', header: 'Apellido' }
    ];
    }
  
    realizarPeticion() {
      let self=this;
      this.data.getUsers().subscribe({
        next(data) { self.users = data; },
        error(err) { self.messageService.add({ severity: 'error', 
        summary: 'getUsers', detail: 'Error:'+err }); }
        });
    }
            
    onRowSelect(event) {
      /*
    this.messageService.add({ severity: 'info', 
      summary: 'Usuario seleccionado', detail: 'Nombre:'+event.data.first_name });
      */
    }

    confirmDelete(delUser) {
      let self=this;
      this.confirmationService.confirm({
          message: '¿Quiere eliminar este usuario?',
          accept: () => {
             self.users['data'] = self.users['data'].filter(function(user){ return user.id!=delUser.id;   });
          }
      });
    }

    addUser(){
      const reducer = (ac, cv) => ac.id > cv.id? ac:cv;
      const newId=this.users['data'].reduce(reducer,{id:1})['id'] +1;
      console.log("newId:"+newId);
      const ref = this.dialogService.open(UserFormComponent, 
        { header: 'Crear usuario',  width: '450px', data:{id:newId, first_name:'', last_name:''}  });
      ref.onClose.subscribe((user) => {
          if (user) {
            console.log(user);
            this.users['data'].push(user);
          }
      });
    }

    showUser(user){
      console.log("editUser:"+user);
      const ref = this.dialogService.open(UserFormComponent, 
        { header: 'Modificar usuario',  width: '450px', data:user });
      ref.onClose.subscribe((user) => {
          if (user) {
            let itemIndex = this.users['data'].findIndex(item => item.id == user.id);
            this.users['data'][itemIndex]=user;
            }
      });
    }

}
