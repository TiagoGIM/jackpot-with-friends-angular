import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, delay, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAuth } from '../store/login/login.selectors';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor( public router: Router,
    private store :Store ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Observable<boolean | UrlTree> {

    return this.store.select(selectIsAuth)
    .pipe(
      switchMap( isAuth => isAuth ? of(isAuth) : of(isAuth).pipe(delay(1000))),
      map(isAuth =>  isAuth ?? this.router.parseUrl('/login'))
    );
  } 
}