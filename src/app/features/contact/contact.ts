import { Component, inject } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { ContactForm } from './form/contact-form/contact-form';

@Component({
  selector: 'app-contact',
  imports: [ContactForm],
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
