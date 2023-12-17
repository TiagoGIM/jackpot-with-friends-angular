import { createReducer, on } from '@ngrx/store';
import * as TicketsActions from './ticket.actions';
import { Ticket, mostPicked } from '../../shared/models/ticket.model';

export interface ticketState {
  tickets: Ticket[];
  mostPickeds: mostPicked[];
  error: null
}



export const initialState: ticketState = {
  tickets: [],
  mostPickeds: [
    { year: 2023, numbers: [14, 32, 35, 10, 25, 5] },
    { year: 2022, numbers: [38, 41, 56, 10, 53, 5] },
    { year: 0, numbers: [4, 5, 10, 17, 23, 30, 33, 34, 37, 41, 42, 44, 53] },
  ],
  error: null
};

export const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
  })),
  on(TicketsActions.loadTicketsFailure, (state , { error} ) => ({
    ...state,
    error 
  }))
);
