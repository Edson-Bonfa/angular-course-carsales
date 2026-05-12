import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public LoginResponse?: ResponseLogin;

  public clear(): void {
    this.LoginResponse = undefined;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.LoginResponse && this.LoginResponse.jwt);
  }
}
