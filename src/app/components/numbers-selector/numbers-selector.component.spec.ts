import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersSelectorComponent } from './numbers-selector.component';

describe('NumbersSelectorComponent', () => {
  let component: NumbersSelectorComponent;
  let fixture: ComponentFixture<NumbersSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersSelectorComponent]
    });
    fixture = TestBed.createComponent(NumbersSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
