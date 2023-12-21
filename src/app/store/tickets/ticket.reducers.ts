import { createReducer, on } from '@ngrx/store';
import * as TicketsActions from './ticket.actions';
import { BetResponse, Ticket, mostPicked } from '../../shared/models/ticket.model';

export interface ticketState {
  tickets: Ticket[];
  bets: BetResponse[];
  mostPickeds: mostPicked[];
  error: null;
  editingTicket: {
    editingIndex: number,
    selectedNumbers: number[],
    ticketLength: number,
    completed: boolean,
    id: string,
    odds: number[]
  }
}



export const initialState: ticketState = {
  tickets: [],
  bets: [],
  mostPickeds: [
    { year: 2023, numbers: [14, 32, 35, 10, 25, 5] },
    { year: 2022, numbers: [38, 41, 56, 10, 53, 5] },
    { year: 0, numbers: [4, 5, 10, 17, 23, 30, 33, 34, 37, 41, 42, 44, 53] },
  ],
  error: null,
  editingTicket: {
    editingIndex: 0,
    selectedNumbers: [1, 2, 3, 4, 5, 6],
    ticketLength: 6,
    completed: false,
    id: '',
    odds :[]
  }
};

export const ticketsReducer = createReducer(
  initialState,
  on(TicketsActions.loadTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
  })),
  on(TicketsActions.loadTicketsFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(TicketsActions.editActiveTicketSuccess, (state, { updatedTicket }) => ({
    ...state, tickets: editedTicket(state, updatedTicket)
  })),

  on(TicketsActions.editingIndex, (state, { index }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      editingIndex: index,
    }
  })),

  on(TicketsActions.selectedNumbersUpdate, (state, { newNumbers }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      selectedNumbers: newNumbers,
    }
  })),
  on(TicketsActions.ticketLengthUpdate, (state, { ticketLength }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      ticketLength
    }
  })),
  on(TicketsActions.loadSelectedNumbersFromTickets, (state, { id }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      selectedNumbers: loadFromState(state, id),
      ticketLength: lengthFromState(state, id),
      id
    }
  })),

  on(TicketsActions.editeOneNumber, (state, { number }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      selectedNumbers: updateSelectedNumbers(state, number),
    }
  })),
   on(TicketsActions.resetEditTicket, (state) =>({
    ...state,
    editingTicket: {
      ...state.editingTicket,
      editingIndex:0,
      selectedNumbers: []
    }
   })),

  on(TicketsActions.incrementIndex, (state) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      editingIndex: incrementIndex(state)
    }
  })),
  // mostpicked feat
  on(TicketsActions.updateHighlight, (state, { odds }) => ({
    ...state, editingTicket: {
      ...state.editingTicket,
      odds
    }
  })),

  on(TicketsActions.loadHighLightFromMostPicked, (state, {year})=>({
    ...state, editingTicket: {
      ...state.editingTicket,
      odds : loadHighLightFromMostPicked(state, year)
    }
  }))
);

function loadHighLightFromMostPicked( state : ticketState, year :any) {
  const { numbers }= state.mostPickeds.find( mp => mp.year === year) || { numbers: [] }
  return numbers 
}

function editedTicket(state: ticketState, ticket: any): Ticket[] {
  return state.tickets.map(t => {
    ticket.id === t.id
    return { ...ticket }
  })
}
//TODO: remover unused functions


function loadFromState(state: ticketState, _id: string) {
  const { numbers } = state.tickets.find((ticket: Ticket) => ticket.id === _id) || { id: '', length: 0, numbers: [] }

  return numbers
}

function lengthFromState(state: ticketState, _id: string) {
  const { length } = state.tickets.find((ticket: Ticket) => ticket.id === _id) || { id: '', length: 0, numbers: [] }
  console.log(length)

  return length
}

function updateSelectedNumbers(state: ticketState, number: number): number[] {
  let copy = [...state.editingTicket.selectedNumbers]
  copy[state.editingTicket.editingIndex] = number
  return copy
}

function incrementIndex(state: ticketState): number {

  return state.editingTicket.editingIndex < state.editingTicket.ticketLength - 1 ? state.editingTicket.editingIndex + 1 : 0
}

