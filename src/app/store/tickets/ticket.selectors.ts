import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ticketState } from "./ticket.reducers";

export const appState = createFeatureSelector<ticketState>('ticket');

export const ticketsSelector = createSelector(
  appState,
  (state: ticketState) => {
    return state.tickets
  }
)

export const selectTicketById = (id: string) => createSelector(
  appState,
  (state: ticketState) => {
    return state.tickets.find(ticket => ticket.id === id)
  }
)


export const mostPickedSelector = createSelector(
  appState,
  (state: ticketState) => {
    return state.mostPickeds
  }
)

// refactring numbers-selector
export const editingTicketSelector = createSelector(
  appState,
  (state: ticketState) => state.editingTicket
)

export const highlited = createSelector(
  appState,
  (state: ticketState) => {
    return state.editingTicket.odds
  }
)

export const editingTicketNumbersSelector = createSelector(
  appState,
  (state: ticketState) => {
    return state.editingTicket.selectedNumbers
  }
)

export const editingIndexSelector = createSelector(
  appState,
  (state: ticketState) => {
    return state.editingTicket.editingIndex
  }
)

export const updateTicketSelector = createSelector(
  appState, (state: ticketState) => {
  return state.editingTicket
}
)