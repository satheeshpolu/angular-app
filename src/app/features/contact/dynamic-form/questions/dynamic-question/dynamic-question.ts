import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../../../../utils/dynamic-control/question-base';

@Component({
  selector: 'app-dynamic-question',
  imports: [ReactiveFormsModule],
  templateUrl: './dynamic-question.html',
  styleUrl: './dynamic-question.css'
})
export class DynamicQuestion {
readonly question = input.required<QuestionBase<string>>();
  readonly form = input.required<FormGroup>();
  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
}
