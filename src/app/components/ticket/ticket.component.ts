import { Component, Input } from '@angular/core';

@Component({
  selector: 'jwf-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() ticket: any;
}
