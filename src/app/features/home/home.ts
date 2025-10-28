import { Component, inject } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from '../../utils/auto-focus/auto-focus.directive';

@Component({
  selector: 'app-home',
  imports: [FormsModule, AutoFocusDirective],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  messageStatus: string = 'No message sent yet';
  private sharedService = inject(SharedService);
  messageToSend: string = this.sharedService.getMessage();

  sendMessageToSibling2() {
    this.sharedService.sendMessage(this.messageToSend);
    this.messageStatus = 'Message sent to Sibling...!';
  }
}
