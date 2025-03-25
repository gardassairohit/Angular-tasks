import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      // User is logged in, redirect to user-list
      this.router.navigate(['/user-list']);
      return false; // Block access to the login route
    }
    // User is not logged in, allow access to the login route
    return true;
  }
}