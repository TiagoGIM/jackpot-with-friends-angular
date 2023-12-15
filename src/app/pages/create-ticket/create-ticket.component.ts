import { Component } from '@angular/core';

@Component({
  selector: 'jwf-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent {
  selectedNumbers: number[] = Array(6).fill(null);
  allNumbers: number[] = [];
  ticketLength: number = 6;
  editingIndex = 0;

  constructor() {
    this.initializeNumbers();
  }

  private initializeNumbers() {
    const totalNumbers = 60;
    this.allNumbers = Array.from(
      { length: totalNumbers },
      (_, index) => index + 1
    );
  }

  isSelected(num: number): boolean {
    return this.selectedNumbers.includes(num);
  }
}
