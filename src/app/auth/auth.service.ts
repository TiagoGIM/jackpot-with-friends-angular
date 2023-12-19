import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../shared/models/user.mode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { auth } from '../shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    try {
      const jwt = JSON.parse(localStorage.getItem('accessToken')!);

      return jwt ? true : false;
    } catch (error) {
      return false;
    }
  }

  login(credentials: User): Observable<auth> {
    return this.http.post<auth>(this.API_URL + '/auth/login', credentials).pipe(
      tap((response) => {
        const jwt = JSON.stringify(response.accessToken);
        localStorage.setItem('accessToken', jwt);
        // this.setAuthenticated(true);
      }),
      catchError((error) => {
        console.error('Erro ao fazer login:', error);
        // this.setAuthenticated(false);
        localStorage.removeItem('accessToken');
        return throwError(() => error);
      })
    );
  }

  getAccessToken(): string | null {
    return JSON.parse(localStorage.getItem('accessToken')!);
  }
}
