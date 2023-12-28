import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountNumbersComponent } from './count-numbers.component';

describe('CountNumbersComponent', () => {
  let component: CountNumbersComponent;
  let fixture: ComponentFixture<CountNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountNumbersComponent]
    });
    fixture = TestBed.createComponent(CountNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
