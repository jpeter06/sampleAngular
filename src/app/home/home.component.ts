import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
//import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  download(){
    window.location.href = 'data:text/csv;charset=UTF-8,'
                            + encodeURIComponent("TExto :-)");
  }
}
