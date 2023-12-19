import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BetResponse, Ticket } from '../shared/models/ticket.model';

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

  loadTickets(): Observable<BetResponse[]> {
    return this.http.get<BetResponse[]>(this.API_URL+'/bet');
  }
  updateTicket(betTosave:any): Observable<any> {
    let { editedTicket} = betTosave;
    return this.http.patch<any>(this.API_URL+'/bet', editedTicket);
  }
}