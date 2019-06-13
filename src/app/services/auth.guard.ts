import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private tokenservice: TokenService) {

    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
        console.log(state, 'state');
        console.log(next, 'next');
        if (this.tokenservice.isLogin()) {
            return true;
        }
        return false;
  }
}