import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPagesComponent } from './menu-pages.component';

describe('MenuPagesComponent', () => {
  let component: MenuPagesComponent;
  let fixture: ComponentFixture<MenuPagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPagesComponent]
    });
    fixture = TestBed.createComponent(MenuPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
