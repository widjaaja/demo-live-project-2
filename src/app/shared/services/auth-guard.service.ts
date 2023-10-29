import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {
  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    let userRole = localStorage.getItem('user_role');
    if (userRole == 'CUSTOMER' || userRole == 'PARTNER') {
      userRole = 'USER';
    }
    if (expectedRole != userRole) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}
