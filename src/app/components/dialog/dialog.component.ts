import { Component } from '@angular/core';
import { DialogStore } from './dialog.store';

@Component({
  selector: 'jwf-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogStore: DialogStore) {}


  closeDialog(): void {
    this.dialogStore.hide();
  }
}
