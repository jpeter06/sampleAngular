import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() ff:Function;
  constructor() { }

  ngOnInit() {
  }

  callParent(){ if(this.ff!=null) this.ff('aa');
                else alert("ok")}
}
