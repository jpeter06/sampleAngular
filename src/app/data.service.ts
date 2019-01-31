import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class DataService {
  color:string='pataa';
  constructor(private http: HttpClient) { }

  getUsers() {
    //return this.http.get('https://reqres.in/api/users')   
   return this.http.get('http://localhost:4202/api/users')   
    .pipe(     catchError(this.handleError)    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
