import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ticket } from 'src/app/shared/models/ticket.model';
import { editActiveTicket } from 'src/app/store/tickets/ticket.actions';
import {
  mostPickedSelector,
  selectTicketById,
} from 'src/app/store/tickets/ticket.selectors';

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

  constructor(private store: Store<any>, private route: ActivatedRoute) {
    this.initializeNumbers();
    this.idParam = this.route.snapshot.params['id'];
  }

  yearOptions = [
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 0, label: 'Todos' },
    { value: 1, label: 'x' },
  ];

  selectTicketById$: Observable<any> | undefined
  mostPickedNumbersFor2022$ = this.store.select(mostPickedSelector);

  idParam!: string;

  ngOnInit(): void {
    this.selectTicketById$ = this.store.select(selectTicketById(this.idParam));
    this.selectTicketById$.subscribe({
      next: (data: Ticket) => {
        this.ticketLength = data?.length
        if (!!data?.numbers.length) this.selectedNumbers = [...data?.numbers]
      },
    });
  }

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

  invalidNumbers() {
    return this.selectedNumbers.some(num => num === null);
  }
  clearNumbers() {
    this.selectedNumbers = Array(this.ticketLength).fill(null);
    this.editingIndex = 0;
  }
  saveNumbers() {
    const editedTicket = {
      numbers: [...this.selectedNumbers],
      id: this.idParam,
      status: '',
      length: 0
    }

    this.store.dispatch(editActiveTicket({
      editedTicket
    }))
  }
}
