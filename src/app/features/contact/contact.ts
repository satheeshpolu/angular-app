import { Component, inject } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  message: string = 'Default BehaviorSubject message...!';

  private sharedService = inject(SharedService);

  constructor() {
    this.sharedService.currentMessage$.subscribe(msg => {
      this.message = msg;
    });
  }
}
