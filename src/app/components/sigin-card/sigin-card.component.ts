import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.mode';
import { login, signin } from 'src/app/store/login/login.actions';
import { selectIsLoading, selectError } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'jwf-sigin-card',
  templateUrl: './sigin-card.component.html',
  styleUrls: ['./sigin-card.component.css']
})
export class SiginCardComponent {
  user = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    userName: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  error: string | null = ''
  isLoading = false;
  constructor(private store: Store) {
    this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
    this.store.select(selectError).subscribe(error => (this.error = error));
  }

  errorMessage$ = this.store.select(selectError);

  onSubmit() {
    const user: User = {...this.user.value
    };
    
    this.store.dispatch(signin({ user }))
  }
}