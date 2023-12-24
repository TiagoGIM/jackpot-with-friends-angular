import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginSuccess, ping } from './store/login/login.actions';
import { AuthService } from './auth/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store, private auth: AuthService) { }

  ngOnInit(): void {
    this.store.dispatch(ping())
  //   const token = localStorage.getItem('accessToken')
  //   if (token) this.auth.ping().subscribe(res => {
  //     if (res.message === 'ok') this.store.dispatch(loginSuccess())
  //   })
  }
}