import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService, SelectItem} from 'primeng/api';
import {horaValidator} from '../validations/validator'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService]
})
export class FormComponent implements OnInit {
    userform: FormGroup;
    submitted: boolean;
    marcas: SelectItem[];
    coches: SelectItem[];
    description: string;

    constructor(private fb: FormBuilder, private messageService: MessageService) {}

    ngOnInit() {
      this.userform = this.fb.group({
          'texto': new FormControl('',  Validators.compose([Validators.required,
             Validators.minLength(5),,
             horaValidator()])),
          'fecha': new FormControl('', Validators.required),
          'marca': new FormControl('', [Validators.required]),
          'coche': new FormControl('', Validators.required)
      });
      this.userform.controls['fecha'].setValue(new Date());
      this.marcas = [];
      this.marcas.push({label:'Select marca', value:''});
      this.marcas.push({label:'Magda', value:'Magda'});
      this.marcas.push({label:'Ford', value:'Ford'});
      this.coches=[];
      this.userform.controls['marca'].valueChanges.subscribe((value) => {
        console.log(value);
        this.coches.length=0;
        this.coches.push({label:'Select coche', value:''});
        if(value==='Magda'){
            this.coches.push({label:'Cx-3', value:'Cx-3'});
            this.coches.push({label:'Cx-5', value:'Cx-5'});
        }else{
            this.coches.push({label:'focus', value:'focus'});
            this.coches.push({label:'mondeo', value:'mondeo'});
        }
        this.userform.controls['coche'].setValue('');
      });
  }

  onSubmit(value: string) {
      this.submitted = true;
      this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted2'});
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
