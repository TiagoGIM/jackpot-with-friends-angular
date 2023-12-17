import { Injectable } from '@angular/core';
import { TicketsMockService } from './tickets.mock.service';
import { Observable } from 'rxjs/internal/Observable';
import { Ticket } from '../shared/models/ticket.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {

  constructor(private ticketsMockService: TicketsMockService) {
    const API_URL = environment.apiUrl

    console.log("enviroment  is production : ", environment.production)
  }

  loadTickets(): Observable<Ticket[]> {
    return this.ticketsMockService.loadTickets().pipe(
      catchError((error) => {
        console.error('Error loading tickets:', error);
        return of([]); // Tratar erro conforme necessário
      })
    );
  }
}