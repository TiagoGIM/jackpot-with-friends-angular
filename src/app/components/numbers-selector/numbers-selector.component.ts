import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { mostPicked } from 'src/app/shared/models/ticket.model';
import { editeOneNumber, incrementIndex } from 'src/app/store/tickets/ticket.actions';
import { editingIndexSelector, editingTicketNumbersSelector, editingTicketSelector } from 'src/app/store/tickets/ticket.selectors';

@Component({
  selector: 'jwf-numbers-selector',
  templateUrl: './numbers-selector.component.html',
  styleUrls: ['./numbers-selector.component.css']
})
export class NumbersSelectorComponent {
allNumbers: any;
selectNumber(number: any, s: any) {
  this.store.dispatch(editeOneNumber({number}))
  this.store.dispatch(incrementIndex())
}
isMostPicked(num: any, numbers :any) {
  return numbers?.includes(num) ?? false
}
isSelected(num :any, numbers : any[]) {
return numbers.includes(num);
}
  constructor(private store: Store<any>){}

  @Input() mostPickeds? : mostPicked[] | null= [];
  
  selectedNumbers$ = this.store.select(editingTicketSelector)// Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;
  editingIndex$ = this.store.select(editingIndexSelector)

  allnumbers() {
    const totalNumbers = 60;
    return Array.from(
      { length: totalNumbers },
      (_, index) => index + 1
    );
  }

}
