import { Injectable } from '@angular/core';
import {environment} from '../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../app/model/User';
const   API_LOCAL_USER = `${environment.API_LOCAL_USER}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient
  ) { }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>(API_LOCAL_USER+'user-profile/'+id);
  }
  updateUser(user: User): Observable<User>{
    return this.http.put<User>(API_LOCAL_USER+'user-profile',user);
  }
}
