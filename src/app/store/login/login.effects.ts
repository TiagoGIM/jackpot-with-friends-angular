import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as LoginActions from './login.actions'
import { Router } from '@angular/router';
export interface ErrorHttp {
  status : number, 
  statusText: string
}
@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      exhaustMap((user) =>
      this.authService.login(user.user).pipe(
        map((token) => {
          this.router.navigate(['/ticket-list']);
          return LoginActions.loginSuccess({ token });
        }),
        catchError((error: ErrorHttp) => of(LoginActions.loginFailure({ error: error.statusText })))
      )
    )
  )
);

  constructor(private actions$: Actions, private authService: AuthService, private router : Router) {}
}