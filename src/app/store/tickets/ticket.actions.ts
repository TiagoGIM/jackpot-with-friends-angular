import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../shared/models/ticket.model';

export const loadTickets = createAction('[Load Tickets] Load Tickets');
export const loadTicketsSuccess = createAction('[Load Ticket Sucess] Load with Sucess', props<{ tickets: Ticket[] }>());
export const loadTicketsFailure = createAction('[Load Ticket Error] Load with Error', props<{ error: any }>());

export const editActiveTicketSuccess = createAction('[Tickets] Edit Active Ticket Success', props<{ updatedTicket: Ticket }>());
export const editActiveTicketFailure = createAction('[Tickets] Edit Active Ticket Failure', props<{ error: string }>());

// TODO organize actions editing ticket

export const editingIndex = createAction('[Change editingIndex]', props<{index:number}>())
export const selectedNumbersUpdate = createAction('[Update selected numbers]', props<{ newNumbers :number[]}>())
export const ticketLengthUpdate = createAction('[Update ticketLength]', props<{ticketLength:number}>())
export const loadSelectedNumbersFromTickets = createAction('[Update selected numbers]', props<{ id : string}>())
export const editeOneNumber =  createAction('[Update one number at selected numbers]', props<{ number : number}>())
export const incrementIndex = createAction('[Increment index]')
// export const updateEditId = createAction('[Update Edited Ticket id]',  props<{ id : string}>())
export const updateTicket = createAction('[Update Ticket From Store]', props<{ ticketToUpdate : { id: string , numbers : number[]}}>())


export const resetEditTicket = createAction('[Clear editingTicket]')

export const updateHighlight = createAction('[Update High Light selected numbers]', props<{ odds : number[]}>())

export const loadHighLightFromMostPicked =  createAction('[Update High Light selected numbers]', props<{ year : number}>())
