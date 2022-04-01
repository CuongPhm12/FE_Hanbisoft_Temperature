import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {JwtResponse} from '../app/model/JwtResponse';
import {SignInForm} from '../app/model/SignInForm';
import {SignUpForm} from '../app/model/SignUpForm';
import {User} from '../app/model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
// API_LOCAL
  private  API_SIGNUP = environment.API_LOCAL + 'signup';
  private API_SIGNIN = environment.API_LOCAL + 'signin';
  private API_USER_PROFILE = environment.API_LOCAL + 'currentUser';
  data: boolean;
  constructor(private http: HttpClient) {}
  getCurrentUser():Observable<User>{
      return this.http.get<User>(this.API_USER_PROFILE)

  }
  signUp(signUp: SignUpForm): Observable<any>{
    return this.http.post<any>(this.API_SIGNUP, signUp);
  }
  signIn(signIn: SignInForm): Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.API_SIGNIN,signIn)
  }
  setData(data){
    this.data = data;
  }
  getData():boolean{
    return this.data;
  }
}
