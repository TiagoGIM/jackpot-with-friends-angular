import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  loadHighLightFromMostPicked,
  loadSelectedNumbersFromTickets,
  resetEditTicket,
  updateTicket
} from 'src/app/store/tickets/ticket.actions';
import {
  editingIndexSelector,
  editingTicketNumbersSelector,
  selectStatusEdited,
  updateTicketSelector,
} from 'src/app/store/tickets/ticket.selectors';

@Component({
  selector: 'jwf-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
})
export class CreateTicketComponent {

  selectedNumbers$ = this.store.select(editingTicketNumbersSelector)
  editingIndex$ = this.store.select(editingIndexSelector)
  yearOptions = [
    { value: 2022, label: '2022' },
    { value: 2023, label: '2023' },
    { value: 0, label: 'Todos' },
    { value: 1, label: 'x' },
  ];


  idParam!: string;
  editedTicket$ = this.store.select(updateTicketSelector)
  allNumbers: number[] = [];
  label$ = this.store.select(selectStatusEdited)

  constructor(private store: Store<any>, private route: ActivatedRoute) {

    this.idParam = this.route.snapshot.params['id'];
    this.store.dispatch(loadSelectedNumbersFromTickets({ id: this.idParam }))
  }


  saveNumbersFromStore(bet: any) {
    const { id, selectedNumbers } = bet
    if (!!selectedNumbers.length) this.store.dispatch(updateTicket({
      ticketToUpdate: {
        id,
        numbers: selectedNumbers
      }
    }))
  }

  clearNumbers() {
    this.store.dispatch(resetEditTicket())
  }

  onYearSelected(year: number): void {
    this.store.dispatch(loadHighLightFromMostPicked({ year }));
  }

}
