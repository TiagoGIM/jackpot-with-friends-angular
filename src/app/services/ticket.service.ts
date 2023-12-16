import { Injectable } from '@angular/core';
import { TicketsMockService } from './tickets.mock.service';
import { Observable } from 'rxjs/internal/Observable';
import { Ticket } from '../shared/models/ticket.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  // Substitua o serviço HTTP pelo serviço mockado
  constructor(private ticketsMockService: TicketsMockService) {}

  loadTickets(): Observable<Ticket[]> {
    return this.ticketsMockService.loadTickets().pipe(
      catchError((error) => {
        console.error('Error loading tickets:', error);
        return of([]); // Tratar erro conforme necessário
      })
    );
  }
}