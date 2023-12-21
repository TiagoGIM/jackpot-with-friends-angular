import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSuccess } from './store/login/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store : Store){}
   ngOnInit(): void {
    const token = localStorage.getItem('accessToken')
    if(token) this.store.dispatch(loginSuccess())
 }
}