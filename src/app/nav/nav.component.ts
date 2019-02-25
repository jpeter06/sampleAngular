import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: String ='myApp';
  items: MenuItem[];

  constructor() { }

  //LOGIN HOME PRIMETABLE R.FORM T.FORM TEMPLATE ABOUT
  ngOnInit() {
    this.items = [
      {  label: 'LOGIN', routerLink:'/login'},
      {  label: 'HOME', routerLink:'/home'},
      {  label: 'TABLAS', 
        items: [
          {  label: 'PRIMETABLE', routerLink:'/primetable'},
          {  label: 'PRIMETABLE2', routerLink:'/primetable2'}
    
        ]},
      {  label: "FORMULARIOS",
          items: [
            {  label: 'R.FORM', routerLink:'/form'},
            {  label: 'T.FORM', routerLink:'/templateForm'}]},
      {  label: 'TEMPLATE', routerLink:'/template'},
      {  label: 'ABOUT', routerLink:'/about'},
      {  label: 'lazy', routerLink:'/lazy'},
  ];
  }

}
