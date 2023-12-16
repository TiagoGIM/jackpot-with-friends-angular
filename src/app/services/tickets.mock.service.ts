// tickets.mock.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ticket } from '../shared/models/ticket.model';



@Injectable({
  providedIn: 'root',
})
export class TicketsMockService {
  private readonly mockTickets: Ticket[] = [
    { id: '1', length: 6, status: 'active', numbers: [1, 2, 3, 4, 5, 6] },
    { id: '2', length: 6, status: 'ended', numbers: [7, 8, 9, 10, 11, 12] },
    // Adicione mais bilhetes conforme necessário
  ];

  loadTickets(): Observable<Ticket[]> {
    // Simula um atraso de 500 ms no carregamento (simulação assíncrona)
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.mockTickets);
        observer.complete();
      }, 500);
    });
  }

  // Adicione métodos conforme necessário para simular outras operações
}
