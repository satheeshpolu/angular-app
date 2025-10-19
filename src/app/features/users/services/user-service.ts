import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient){}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiURL).pipe(
      retry(2),
      catchError((error) => this.handleError(error, 'Failed to load user'))
    );
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.apiURL}/${id}`).pipe(
      retry(2),
      catchError((error) => this.handleError(error, 'Failed to load user'))
    )
  }

  private handleError(error: HttpErrorResponse, customMsg?: string){
    let message = 'An unexpected error occured.';
    return throwError(() => new Error(message))
  }
}
