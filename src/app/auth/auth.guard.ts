import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { selectIsAuth } from '../store/login/login.selectors';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router,
    private store :Store ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  )/*: Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn() !== true) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this.router.navigate(['login']);
    }
    return true;
  }*/{
  return this.store.select(selectIsAuth).pipe(
      map((isAuth) => {
        return isAuth ? true : this.router.parseUrl("/login");
      })
    );
  }
}