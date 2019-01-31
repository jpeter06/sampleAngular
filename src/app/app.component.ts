import { Component, OnInit } from '@angular/core';
import { HTTPStatus }  from './app.interceptor';
import { trigger } from "@angular/animations";
import {fadeAnimation, fadeAnimation2, fadeAnimation3} from './animations';
import { NativeEventSource, EventSourcePolyfill } from  'event-source-polyfill/src/eventsource.min.js';
import { MessageService } from 'primeng/api';

const EventSource = NativeEventSource || EventSourcePolyfill;

@Component({
  selector: 'app-root',
  animations: [fadeAnimation,fadeAnimation2,fadeAnimation3],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angulart';
  HTTPActivity: string;
  constructor(private httpStatus: HTTPStatus, private messageService: MessageService) {
    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {
        this.HTTPActivity = !status?'hidden':'visible';
         console.log("APP:"+status)
      });
  }

  ngOnInit() {
    let source = new EventSource('http://localhost:4202/events');
    source.addEventListener('message', message => {
        this.messageService.add({ severity: 'info', 
      summary: 'Evento recibido', detail: message.data });     
    });
  }

  prepRouteState(outlet: any) {
    //return outlet.activatedRouteData['animation'] || 'firstPage'; 
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
