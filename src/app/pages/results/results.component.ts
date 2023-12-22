import { Component } from '@angular/core';
import { TicketsService } from 'src/app/services/ticket.service';

@Component({
  selector: 'jwf-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 constructor(
  private ticketService : TicketsService
 ){}
 odds$ = this.ticketService.loadOdds()
}
