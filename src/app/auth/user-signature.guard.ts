import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, delay, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUserSignature, selectIsAdmin } from '../store/login/login.selectors';
@Injectable({
  providedIn: 'root',
})
export class SignatureGuard  {
  constructor( public router: Router,
    private store :Store ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>  {

    return this.store.select(selectUserSignature)
    .pipe(
      switchMap(isPayed => isPayed ? of(isPayed) : of(isPayed).pipe(delay(1000))),
      map(isPayed => isPayed ?? this.router.parseUrl('/home'))
    );
  } 
}

