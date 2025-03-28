import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
      // If the user tries to access the login page while logged in, redirect to user-list
      if (state.url === '/login') {
        this.router.navigate(['/user/user-list']);
        return false;
      }
      // User is authenticated, allow access
      return true;
    } else {
      // User is not logged in, allow access only to login or register
      if (state.url === '/login' || state.url === '/register') {
        return true;
      }

      // Redirect to login if trying to access a protected route
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
