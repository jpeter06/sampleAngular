import { Component } from '@angular/core';
import { HTTPStatus }  from './app.interceptor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulart';
  HTTPActivity: string;
  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {
        this.HTTPActivity = !status?'hidden':'visible';
         console.log("APP:"+status)
      });
}
}
