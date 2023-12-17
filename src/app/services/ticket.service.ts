import { Injectable } from '@angular/core';
import { TicketsMockService } from './tickets.mock.service';
import { Observable } from 'rxjs/internal/Observable';
import { Ticket } from '../shared/models/ticket.model';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  
  API_URL = environment.apiUrl
  constructor(private http: HttpClient) {

    console.log("enviroment  is production : ", environment.production)
    console.log("API_URL:" ,this.API_URL)
  }

  loadTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.API_URL+'/ticket');
  }
}