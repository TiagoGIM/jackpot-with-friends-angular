import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from './auth/auth.service';
import { ping } from './store/login/login.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(ping())
  }
}