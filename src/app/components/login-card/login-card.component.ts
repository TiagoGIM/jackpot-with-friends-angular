import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.mode';
import { login } from 'src/app/store/login/login.actions';
import { selectError, selectIsLoading } from 'src/app/store/login/login.selectors';

@Component({
  selector: 'jwf-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent {
  user = new FormGroup({
    phoneNumber: new FormControl('',Validators.required),
    password:new FormControl('',[Validators.required, Validators.minLength(6)]),
  }); 
  error : string  | null = '' 
  isLoading = false;
  constructor(private store: Store) {
    this.store.select(selectIsLoading).subscribe(isLoading => (this.isLoading = isLoading));
    this.store.select(selectError).subscribe(error => (this.error = error));
  }

  errorMessage$ = this.store.select(selectError);
  
  onSubmit(){
    const credentials: User = {
      phoneNumber: this.user.value.phoneNumber || '',
      password: this.user.value.password || '',
    };
    this.store.dispatch(login({user :credentials}))
  }
}
