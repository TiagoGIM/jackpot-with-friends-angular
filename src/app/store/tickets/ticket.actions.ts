import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../shared/models/ticket.model';

export const loadTickets = createAction('[Load Tickets] Load Tickets');
export const loadTicketsSuccess = createAction('[Load Ticket Sucess] Load with Sucess', props<{ tickets: Ticket[] }>());
export const loadTicketsFailure = createAction('[Load Ticket Error] Load with Error', props<{ error: any }>());


export const editActiveTicket = createAction('[Tickets] Edit Active Ticket', props<{ editedTicket: Ticket }>());
export const editActiveTicketSuccess = createAction('[Tickets] Edit Active Ticket Success', props<{ updatedTicket: Ticket }>());
export const editActiveTicketFailure = createAction('[Tickets] Edit Active Ticket Failure', props<{ error: string }>());