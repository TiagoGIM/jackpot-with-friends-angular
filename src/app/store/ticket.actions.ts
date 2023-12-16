import { createAction, props } from '@ngrx/store';
import { Ticket } from '../shared/models/ticket.model';

export const loadTickets = createAction('[Load New Ticket] Load New Ticket');
export const loadTicketsSuccess = createAction('[Load New Ticket Sucess] Load with Sucess', props<{ tickets: Ticket[] }>());
export const loadTicketsFailure = createAction('[Load New Ticket Error] Load with Error', props<{ error: any }>());


export const editActiveTicket = createAction('[Tickets] Edit Active Ticket', props<{ editedTicket: Ticket }>());
export const editActiveTicketSuccess = createAction('[Tickets] Edit Active Ticket Success', props<{ updatedTicket: Ticket }>());
export const editActiveTicketFailure = createAction('[Tickets] Edit Active Ticket Failure', props<{ error: string }>());