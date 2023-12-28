import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SimpleUser } from '../shared/models/user.mode';

@Injectable({
  providedIn: 'root'
})
export class AdminService {



  API_URL = environment.apiUrl
  constructor(
    private http: HttpClient) {
  }

  loadUsers(): Observable<SimpleUser[]> {
    return this.http.get<SimpleUser[]>(this.API_URL + '/user');
  }

  updateMemberSignature(email :string):Observable<any> {
    return this.http.post<any>(this.API_URL +'/user/update-signature', {email});
  }


}
