import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private router: Router) { }

  userDashboard() {
    let userRole = localStorage.getItem('user_role');
    if (userRole == 'ADMIN') {
      this.router.navigateByUrl('/admin/dashboard');
    } else {
      this.router.navigateByUrl('/user/dashboard');
    }
  }
}
