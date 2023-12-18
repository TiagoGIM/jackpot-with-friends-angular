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


export const selectMostPickedsByYear = (year: number) =>
  createSelector(
    appState,
    (state :ticketState ) => {
        return  state.mostPickeds?.find((mostPicked) => mostPicked.year === year) ?? []
        }
  );

export const selectMostPickedNumbersByYear = (year: number) =>
  createSelector(
    selectMostPickedsByYear(year),
    (mostPicked:any) => {
        return mostPicked?.numbers ?? []
    }
  );