import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPageBtnComponent } from './up-page-btn.component';

describe('UpPageBtnComponent', () => {
  let component: UpPageBtnComponent;
  let fixture: ComponentFixture<UpPageBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpPageBtnComponent]
    });
    fixture = TestBed.createComponent(UpPageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
