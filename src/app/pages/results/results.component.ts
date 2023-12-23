import { Component } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { TicketsService } from 'src/app/services/ticket.service';

interface OddsItem {
  number : number,
  quantity: number
}
@Component({
  selector: 'jwf-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
 constructor(
  private ticketService : TicketsService
 ){}
 showAll: boolean = true
 odds$ : Observable<OddsItem[]>= this.ticketService.loadOdds().pipe(
  map((numbers) =>
  numbers.sort((a: OddsItem, b: OddsItem) => b.quantity - a.quantity).slice(0,  10)
)
  
 )



}
