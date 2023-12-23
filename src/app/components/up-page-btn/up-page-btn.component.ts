import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'jwf-up-page-btn',
  templateUrl: './up-page-btn.component.html',
  styleUrls: ['./up-page-btn.component.css']
})
export class UpPageBtnComponent {
  showScrollTopButton: boolean = false;

  // Mostrar ou ocultar o botão com base na posição de rolagem
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }

  // Rolar suavemente para o topo ao clicar no botão
  scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
  }
}
