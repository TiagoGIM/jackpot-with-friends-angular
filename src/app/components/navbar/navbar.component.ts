import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/login/login.actions';
import { LoginState } from 'src/app/store/login/login.reducer';

@Component({
  selector: 'jwf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private store: Store<LoginState>) { }
  handleLogout() {
    this.store.dispatch(logout())
  }

}
