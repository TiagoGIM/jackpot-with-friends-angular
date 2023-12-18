import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'jwf-numbers-ball',
  templateUrl: './numbers-ball.component.html',
  styleUrls: ['./numbers-ball.component.css'],
})
export class NumbersBallComponent {
  @Input() selectedNumbers: number[] = [];

  @Input() editable:boolean = true;

  @Output() editSelectedChange = new EventEmitter<number>();

  @Input() editSelected: number | null = 0;

  emitSelectedNumber(i: any) {
    this.editSelectedChange.emit(i);
  }

  isEditing(index: number): boolean {
    return index === this.editSelected && this.editable;
  }
}
