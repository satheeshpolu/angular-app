import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { QuestionBase } from '../../../../utils/dynamic-control/question-base';
import { DropdownQuestion } from '../../../../utils/dynamic-control/question-dropdown';
import { TextboxQuestion } from '../../../../utils/dynamic-control/question-textbox';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[]) {
    const group: any = {};
    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          {key: 'cat', value: 'Cat'},
          {key: 'dog', value: 'Dog'},
          {key: 'horse', value: 'Horse'},
          {key: 'capybara', value: 'Capybara'},
        ],
        order: 3,
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Alex',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}