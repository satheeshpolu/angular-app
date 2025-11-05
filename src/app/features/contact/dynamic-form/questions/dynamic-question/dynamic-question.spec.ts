import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestion } from './dynamic-question';

describe('DynamicQuestion', () => {
  let component: DynamicQuestion;
  let fixture: ComponentFixture<DynamicQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicQuestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicQuestion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
