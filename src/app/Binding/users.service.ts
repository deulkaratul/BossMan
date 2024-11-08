import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { catchError } from 'rxjs/operators';
// import "rxjs/add/operator/throw";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  error: string = '';
  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users").pipe(
      catchError(error => {
        // Handle the error here
        console.error('Error fetching data:', error);

        // Optionally, return a default value or throw a new error
        return throwError(() => new Error('Something bad happened; please try again later.'));
      })
    );
    
   }

  getAllUsersMock(){
    return [
      new Users(1, 'Alice Johnson', 'New York', 75000, new Date('1990-05-15')),
      new Users(2, 'Bob Smith', 'Los Angeles', 65000, new Date('1985-11-20')),
      new Users(3, 'Charlie Brown', 'Chicago', 80000, new Date('1988-01-30')),
      new Users(4, 'Diana Green', 'San Francisco', 92000, new Date('1992-07-25')),
      new Users(5, 'Eve White', 'Austin', 70000, new Date('1991-12-10')),
    ];
  }
}


