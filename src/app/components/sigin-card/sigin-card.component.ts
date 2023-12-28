import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
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
    phoneNumber: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    userName: new FormControl('', Validators.required),
    confirmPassword: new FormControl('',[Validators.required,this.passwordMatchValidator.bind(this), Validators.minLength(6)])
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
    
    if(this.user.valid) this.store.dispatch(signin({ user }))
  }
  private passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = this.user?.get('password')?.value;
    if (password === undefined) {
      return null; 
    }
    const confirmPassword = control.value;


   

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }
}
