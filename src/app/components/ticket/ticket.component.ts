import { Component, Input } from '@angular/core';

@Component({
  selector: 'jwf-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() ticket: any;
  emptyBalls : number[] = [1,2,3,4,5,6]
}
