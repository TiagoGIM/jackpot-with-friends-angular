import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';

interface DialogState {
  isVisible?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class DialogStore extends ComponentStore<DialogState> {
  constructor() {
    super({ isVisible: false });
  }

  show(): void {
    this.setState({ isVisible: true });
  }


  hide(): void {
    this.setState({ isVisible: false });
  }

  readonly isVisible$: Observable<boolean> = this.select((state: DialogState) => state.isVisible || false)

}
