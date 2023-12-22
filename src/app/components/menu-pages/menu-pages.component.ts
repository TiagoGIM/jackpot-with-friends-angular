import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginState } from 'src/app/store/login/login.reducer';
import { selectIsAuth } from 'src/app/store/login/login.selectors';

interface MenuOption {
  label : string; value:string
}

@Component({
  selector: 'jwf-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.css'],
})
export class MenuPagesComponent {
  constructor(private elementRef: ElementRef,
    private store: Store<LoginState>,
    private route : Router) {}
 
  isAuth$ = this.store.select(selectIsAuth)

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @Input() options: MenuOption[] = [
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
      value: 'results',
    },
    {
      label:'Sair',
      value: 'logout'
    },
  ];
  @Output() optionSelected = new EventEmitter<string>();
  isOpen = false;

  selectOption(option: string) {
    this.optionSelected.emit(option);
    this.isOpen = false;
  }

  handleMenu(option : MenuOption) {
    const  navegateTo = option.value === 'logout' ? 'login' : option.value
    this.route.navigate([navegateTo])
    this.isOpen = false;
  }
  handleIsOpen() {
    this.isOpen = !this.isOpen
  }
}
