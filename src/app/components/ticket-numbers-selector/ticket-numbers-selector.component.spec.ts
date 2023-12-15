import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketNumbersSelectorComponent } from './ticket-numbers-selector.component';

describe('TicketNumbersSelectorComponent', () => {
  let component: TicketNumbersSelectorComponent;
  let fixture: ComponentFixture<TicketNumbersSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketNumbersSelectorComponent]
    });
    fixture = TestBed.createComponent(TicketNumbersSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
