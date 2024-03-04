
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  saveToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  SetRole(role: any) {
    sessionStorage.setItem('role', role);
  }

  get getRole(): string | null {
    return sessionStorage.getItem('role');
  }

  SetUsername(username:string){
    sessionStorage.setItem('username',username);
  }

  get getUsername() {
    return sessionStorage.getItem('username');
  }

  SetEmail(email:string){
    sessionStorage.setItem('email',email);
  }

  get getEmail(){
    return sessionStorage.getItem('email');
  }

  get getLoginStatus(): boolean {
    return !!sessionStorage.getItem('token');
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  logout() {
    sessionStorage.clear();
  }
}

