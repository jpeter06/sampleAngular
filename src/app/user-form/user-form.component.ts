import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';

import {DynamicDialogRef} from 'primeng/api';
import {DynamicDialogConfig} from 'primeng/api';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})


export class UserFormComponent implements OnInit {
    userform: FormGroup;
    submitted: boolean;

    constructor(private fb: FormBuilder,
                public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}


    ngOnInit() {
      console.log("data:",this.config.data);
      this.userform = this.fb.group({
          'id': new FormControl(this.config.data.id),
          'first_name': new FormControl(this.config.data.first_name, Validators.required),
          'last_name': new FormControl(this.config.data.last_name, Validators.required)
      });
  }

  onSubmit(value: string) {
    this.ref.close(this.userform.value);
  }

}

