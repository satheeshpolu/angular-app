import { Component, ElementRef, inject, ViewChild } from '@angular/core';
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

  // Reference the paragraph element using its template variable name "message"
  @ViewChild(Home) messageRef!: ElementRef;

  changeText() {
    this.messageRef.nativeElement.textContent = 'Text changed using ViewChild!';
  }
}
