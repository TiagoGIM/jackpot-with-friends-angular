import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from 'src/app/store/login/login.reducer';
import { selectIsAuth } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'jwf-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.css'],
})
export class MenuPagesComponent {
  constructor(private elementRef: ElementRef,
    private store: Store<LoginState>) {}
 
  isAuth$ = this.store.select(selectIsAuth)

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @Input() options: any = [
    {
      label: 'Home',
      value: 'home',
    },
    {
      label: 'Bilhetes',
      value: 'ticket-list',
    },
    {
      label: 'Estatisticas',
      value: 'articles',
    },
    {
      label:'Logout',
      value: 'Sair'
    },
  ];
  @Output() optionSelected = new EventEmitter<string>();
  isOpen = false;

  selectOption(option: string) {
    this.optionSelected.emit(option);
    this.isOpen = false;
  }

  handleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
