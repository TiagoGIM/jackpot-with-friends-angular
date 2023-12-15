import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersBallComponent } from './numbers-ball.component';

describe('NumbersBallComponent', () => {
  let component: NumbersBallComponent;
  let fixture: ComponentFixture<NumbersBallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersBallComponent]
    });
    fixture = TestBed.createComponent(NumbersBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
