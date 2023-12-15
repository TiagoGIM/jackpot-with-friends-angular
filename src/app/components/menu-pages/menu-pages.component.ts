import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'jwf-menu-pages',
  templateUrl: './menu-pages.component.html',
  styleUrls: ['./menu-pages.component.css'],
})
export class MenuPagesComponent {
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  @Input() options: any = [
    {
      name: 'Home',
      value: 'home',
    },
    {
      name: 'Bilhetes',
      value: 'create-ticket',
    },
    {
      name: 'Estatisticas',
      value: 'articles',
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
