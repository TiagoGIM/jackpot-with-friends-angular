import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BetResponse } from '../shared/models/ticket.model';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TicketsService {


  API_URL = environment.apiUrl
  constructor(
    private http: HttpClient) {

  }

  loadTickets(): Observable<BetResponse[]> {
    return this.http.get<BetResponse[]>(this.API_URL + '/bet');
  }

  loadOdds():Observable<any> {
    return this.http.get<any>(this.API_URL + '/bet/odd');
  }

  updateTicket(betTosave: any): Observable<any> {
    let { ticketToUpdate } = betTosave;
    return this.http.patch<any>(this.API_URL + '/bet', ticketToUpdate);
  }
}
