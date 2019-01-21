import { Component, OnInit, ViewChild } from '@angular/core';
import { Formulario }    from '../clases/formulario';
import {NgForm} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
  providers: [MessageService]
})
export class TemplateFormComponent implements OnInit {
  formulario = new Formulario('',new Date(), '', '');
  marcas: SelectItem[];
  coches: SelectItem[];
  submitted=false;
  formChangesSubscription;
  @ViewChild('f') ngForm: NgForm;


  constructor( private messageService: MessageService) {}

  ngOnInit() {
    this.marcas = [];
    this.marcas.push({label:'Select marca', value:''});
    this.marcas.push({label:'Magda', value:'Magda'});
    this.marcas.push({label:'Ford', value:'Ford'});
    this.coches=[];
    this.formChangesSubscription = this.ngForm.form.valueChanges.subscribe(x => {
      if(x.marca!=undefined && this.formulario.marca != x.marca){
        console.log("diff:",this.formulario.marca, x.marca);
        this.coches.length=0;
        this.coches.push({label:'Select coche', value:''});
        if(x.marca==='Magda'){
            this.coches.push({label:'Cx-3', value:'Cx-3'});
            this.coches.push({label:'Cx-5', value:'Cx-5'});
        }else{
            this.coches.push({label:'focus', value:'focus'});
            this.coches.push({label:'mondeo', value:'mondeo'});
        }
        this.formulario.coche='';
      }
    })
  }

  onSubmit() {
      this.submitted = true;
      this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted2'});
  }

  get diagnostic() { return JSON.stringify(this.formulario); }

}

