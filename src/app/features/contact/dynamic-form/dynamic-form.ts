import { Component, computed, inject, input } from '@angular/core';
import { QuestionBase } from '../../../utils/dynamic-control/question-base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlService } from './questions/question-control.service';
import { DynamicQuestion } from './questions/dynamic-question/dynamic-question';

@Component({
  selector: 'app-dynamic-form',
  imports: [DynamicQuestion, ReactiveFormsModule],
  templateUrl: './dynamic-form.html',
  styleUrl: './dynamic-form.css'
})
export class DynamicForm {
  private readonly qcs = inject(QuestionControlService);
  readonly questions = input<QuestionBase<string>[] | null>([]);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),
  );
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
}
