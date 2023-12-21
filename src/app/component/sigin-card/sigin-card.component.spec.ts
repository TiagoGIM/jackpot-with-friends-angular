import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiginCardComponent } from './sigin-card.component';

describe('SiginCardComponent', () => {
  let component: SiginCardComponent;
  let fixture: ComponentFixture<SiginCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiginCardComponent]
    });
    fixture = TestBed.createComponent(SiginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
