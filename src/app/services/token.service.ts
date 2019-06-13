import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    constructor(private router: Router) { }

    isLogin(): boolean {
      const token = localStorage.getItem('pf_token');
      if (token) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }

    saveToken(token: string): void {
      JSON.stringify(localStorage.setItem('pf_token', token));
    }

    getToken(): string {
      return localStorage.getItem('pf_token');
    }
    clearToken(): void {
      localStorage.removeItem('pf_token');
    }

}
