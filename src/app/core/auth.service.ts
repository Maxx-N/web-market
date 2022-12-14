import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth = false;

  constructor() {}

  toggleAuth(): void {
    this.isAuth = !this.isAuth;
  }
}
