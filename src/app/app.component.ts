import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ticketsSelector } from './store/ticket.selectors';
import { loadTickets } from './store/ticket.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jackpot-with-friends';
  constructor(private store : Store<any>){}
  tickets$ = this.store.select(ticketsSelector)
  ngOnInit(): void {
    // this.store.dispatch(loadTickets());
  }
}
