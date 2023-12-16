import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { mostPickedSelector, selectMostPickedNumbersByYear} from 'src/app/store/ticket.selectors';

@Component({
  selector: 'jwf-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent {
clearNumbers() {
  this.selectedNumbers = Array(this.ticketLength).fill(null);
  this.editingIndex = 0;
}
saveNumbers() {
throw new Error('Method not implemented.');
}
  selectedNumbers: number[] = Array(6).fill(null);
  allNumbers: number[] = [];
  ticketLength: number = 6;
  editingIndex = 0;

  yearOptions = [
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 0, label: 'Todos' },
    { value: 1, label: 'x' },
  ]

  constructor(private store : Store<any>) {
    this.initializeNumbers();
  }


  mostPickedNumbersFor2022$ = this.store.select(mostPickedSelector);

  private initializeNumbers() {
    const totalNumbers = 60;
    this.allNumbers = Array.from(
      { length: totalNumbers },
      (_, index) => index + 1
    );
  }

  selectedYear: number = 1;

  onYearSelected(year: number): void {
    this.selectedYear = year;
  }
}
