import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { editingIndex } from 'src/app/store/tickets/ticket.actions';

@Component({
  selector: 'jwf-numbers-ball',
  templateUrl: './numbers-ball.component.html',
  styleUrls: ['./numbers-ball.component.css'],
})
export class NumbersBallComponent {
  @Input() selectedNumbers: number[] | null = [];

  @Input() editable:boolean = true;

  @Output() editSelectedChange = new EventEmitter<number>();

  @Input() editSelected: number | null = 0;

  constructor(private store: Store<any>){}

  emitSelectedNumber(index: any) {
    this.store.dispatch(editingIndex({index}))
    this.editSelectedChange.emit(index);
  }

  isEditing(index: number): boolean {
    return index === this.editSelected && this.editable;
  }
}
