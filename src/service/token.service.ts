import { Injectable } from '@angular/core';
const TOKEN_KEY = 'Token_Key';
const NAME_KEY ='Name_Key';
const ROLE_KEY = 'Role_Key';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles: Array<string> = [];

  constructor() { }
  public getUserId():number{
    // @ts-ignore
    return window.sessionStorage.getItem(USER_ID);
  }
  public logOut(){
    window.sessionStorage.clear();
    window.location.reload();
  }
  public saveTokenLocal(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public setToken(token:string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string{
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public setName(name:string){
    window.sessionStorage.removeItem(NAME_KEY);
    window.sessionStorage.setItem(NAME_KEY,name)}

  public getName():string{
    return window.sessionStorage.getItem(NAME_KEY)
  }
  public setRole(roles: string[]){
    window.sessionStorage.removeItem(ROLE_KEY);
    window.sessionStorage.setItem(ROLE_KEY,JSON.stringify(roles))
  }
  public getRole():string[]{
    this.roles = [];
    if(sessionStorage.getItem(TOKEN_KEY)){
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role =>{
        this.roles.push(role.authority)
      })
    }
    return this.roles
  }


}
