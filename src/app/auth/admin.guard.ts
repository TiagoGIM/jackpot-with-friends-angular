import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, delay, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from '../store/login/login.selectors';
@Injectable({
  providedIn: 'root',
})
export class AdminGuard  {
  constructor( public router: Router,
    private store :Store ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree>  {
    return this.store.select(selectIsAdmin).pipe(
      switchMap(isAdmin => {
        if(!isAdmin){
          return of(isAdmin).pipe(delay(1000));
        }
        return of(isAdmin);
      }),
        map(isAdmin => {
          if (!isAdmin) {
            return this.router.parseUrl('/home');
          }
          return true;
        })
      );
    } 

}
