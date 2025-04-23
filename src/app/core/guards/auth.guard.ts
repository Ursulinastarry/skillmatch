import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {
    constructor(private tokenService: TokenService, private router: Router) {}
  
    canActivate(): Observable<boolean> {
      const token = this.tokenService.getAccessToken();
      if (token) {
        return of(true);
      } else {
        this.router.navigate(['/login']);
        return of(false);
      }
    }
  }
  