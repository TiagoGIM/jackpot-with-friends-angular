import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap, switchMap, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import * as LoginActions from './login.actions'
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.mode';
export interface ErrorHttp {
  status: number,
  statusText: string
}
@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.login),
      switchMap((user) =>
        this.authService.login(user.user).pipe(
          tap(({ accessToken }) => localStorage.setItem("accessToken", accessToken)),
          map((user) => {
            this.router.navigate(['/home']);
            return LoginActions.loginSuccess({user: {
              userName: user.userName,
              signatureStatus: user.signature,
              email: user.login
            }});
          }),
          catchError((error: ErrorHttp) => of(LoginActions.loginFailure({ error: "Login failed" })))
        )
      )
    )
  );

  signin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.signin),
      switchMap((user) =>
        this.authService.signin(user.user).pipe(
          map((token) => {
            this.router.navigate(['/login']);
            return LoginActions.loginSuccess(user);
          }),
          catchError((error: ErrorHttp) => of(LoginActions.loginFailure({ error: "Signin failed" })))
        )
      )
    )
  );

  ping$ =createEffect(() => 
      this.actions$.pipe(
        ofType(LoginActions.ping),
        switchMap(()=>
        this.authService.ping().pipe(
          map((user)=>  LoginActions.loginSuccess({user})),
          catchError((error: ErrorHttp) => of(LoginActions.loginFailure({ error: "Login failed" })))
        )
      )
    )
  );

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(LoginActions.logout),
        tap(() => {
          localStorage.removeItem("accessToken");
          this.router.navigateByUrl("/login");
        })
      );
    },
    { dispatch: false }
  );

  /*init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      mergeMap(({ email, password }) => {
        return this.authService.getCurrentUser().pipe(
          map(({ token }) => setUser({ user })),
          catchError(() => of(setUserError({ message: "Error" })))
        );
      })
    );
  });*/

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }
}