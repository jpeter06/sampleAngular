import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class DataService {
  color:string='pataa';
  //url:string='https://reqres.in';
  url:string='http://localhost:4202';
  constructor(private http: HttpClient) { }

  updateUser(user) {  
    console.log("called updateUser"); 
   return this.http.put(this.url+'/api/users',user, httpOptions)   
    .pipe(     catchError(this.handleError)    )
    .subscribe();
  }

  addUser(user) {  
    console.log("called addUser"); 
   return this.http.post(this.url+'/api/users',user, httpOptions)   
    .pipe(     catchError(this.handleError)    )
    .subscribe();
  }

  deleteUser(user) {  
    console.log("called deleteUser"); 
   return this.http.delete(this.url+'/api/users/'+user.id, httpOptions)   
    .pipe(     catchError(this.handleError)    )
    .subscribe();
  }

  getUsers() {  
   return this.http.get(this.url+'/api/users')   
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
