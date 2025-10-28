import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Subject doesn't retain the last value, BehaviorSubject does
  private messageSource = new BehaviorSubject<string>('Default message');
  currentMessage$ = this.messageSource.asObservable();

  getMessage() {
    return this.messageSource.value;
  } 

  sendMessage(message: string) {
    this.messageSource.next(message);
  }
}
