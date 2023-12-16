import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ticketState } from "./ticket.reducers";

export const appState = createFeatureSelector<ticketState>('ticket');

export const ticketsSelector = createSelector(
    appState,
    (state: ticketState) => {
        console.log(state)
        return state.tickets
    }
)