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
        catchError((error) => {
        localStorage.removeItem('accessToken');
        return throwError(() => error);
      })
    );
  }

  signin(user: User) {
    const userDto = {
      name : user.userName,
      password : user.password,
      phoneNumber: user.phoneNumber
    }
    console.log(userDto)
    return this.http.post<auth>(this.API_URL + '/user/create', userDto)
  }

  logout(){
    localStorage.removeItem('accessToken');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  ping(): Observable<User>{
    return this.http.get<User>(this.API_URL+'/user/ping')
  }
}
