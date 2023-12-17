import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTickets } from 'src/app/store/tickets/ticket.actions';
import { ticketsSelector } from 'src/app/store/tickets/ticket.selectors';

@Component({
  selector: 'jwf-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  constructor(private store: Store<any>) { 
  this.store.dispatch(loadTickets())
  }
  tickets$ = this.store.select(ticketsSelector);
}
