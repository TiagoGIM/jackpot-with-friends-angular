import { createReducer, on } from '@ngrx/store';
import * as TicketsActions from './ticket.actions';
import { Ticket } from '../shared/models/ticket.model';

export interface ticketState {
  tickets: Ticket[];
  mostPickeds: mostPicked[];
}

interface mostPicked {
  year: number;
  numbers: number[];
}

export const initialState: ticketState = {
  tickets: [
    { numbers: [1, 2, 3, 4, 5, 6], id: '3', length: 8, status: 'active' },
  ],
  mostPickeds: [
    { year: 2023, numbers: [14, 32, 35, 10, 25, 5] },
    { year: 2022, numbers: [38, 41, 56, 10, 53, 5] },
    { year: 0, numbers: [4, 5, 10, 17, 23, 30, 33, 34, 37, 41, 42, 44, 53] },
  ],
};

export const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
  }))
  // on(TicketsActions.loadTicketsSuccess, (state, { tickets }) => ({
  //     ...state,
  //     tickets : [...state.tickets,...tickets]
  // }))
);
