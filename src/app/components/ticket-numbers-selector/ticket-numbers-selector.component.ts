import { Component, EventEmitter, Input, Output } from '@angular/core';
import { mostPicked } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'jwf-ticket-numbers-selector',
  templateUrl: './ticket-numbers-selector.component.html',
  styleUrls: ['./ticket-numbers-selector.component.css']
})
export class TicketNumbersSelectorComponent {
  @Input() mostPickeds? : mostPicked[] | null= [];
  @Input() allNumbers: number[] = [];
  @Input() ticketLength: number | null= 6 ;
  @Input() selectedNumbers: any[] = [];
  @Input() editingIndex :number = 0
  @Output() selectedNumbersChange = new EventEmitter<number[]>();
  @Output() editingIndexChange = new EventEmitter<number>();
  @Input() year : number = 1


  selectNumber(number: number) {
    if (!this.isSelected(number)) {
      this.selectedNumbers[this.editingIndex] = number;
      this.editingIndex =
      this.editingIndex < this.ticketLength! -1 ? this.editingIndex + 1 : 0;
    } else {
      this.editingIndex= this.selectedNumbers.indexOf(number);
      this.selectedNumbers[this.editingIndex] = null
    }

  this.selectedNumbersChange.emit(this.selectedNumbers);
  this.editingIndexChange.emit(this.editingIndex);

  }

  isSelected(num: number): boolean {
    return this.selectedNumbers.includes(num);
  }

  isMostPicked(num:number) : boolean {
    const mostPicked = this.mostPickeds?.find((mostPicked) => mostPicked.year === this.year) 
    return mostPicked?.numbers?.includes(num) ?? false
  }
}
