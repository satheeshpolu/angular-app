import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicForm } from '../../dynamic-form/dynamic-form';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../../../utils/dynamic-control/question-base';
import { QuestionControlService } from '../../dynamic-form/questions/question-control.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule,DynamicForm, AsyncPipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {
  private formBuilder = inject(FormBuilder);
  questions$: Observable<QuestionBase<string>[]> = inject(QuestionControlService).getQuestions();

  name = new FormControl('');
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  customerFormBuilder = this.formBuilder.group({
    email: ['', Validators.required],
    // cLastName: [''],
  });
  resetName() {
    this.name.reset();
  }

  onFormSubmit() {
    console.log(this.contactForm.value);
  }
}
