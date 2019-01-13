import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style:boolean=false;
  users: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data
    });
  }

  firstClick(){
    this.h1Style=!this.h1Style;
  }
}
