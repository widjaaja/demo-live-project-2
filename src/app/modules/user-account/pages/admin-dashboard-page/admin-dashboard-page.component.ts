import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { UserAccountService } from '../../services/user-account.service';
@Component({
  selector: 'app-admin-dashboard-page',
  templateUrl: './admin-dashboard-page.component.html',
  styleUrls: ['./admin-dashboard-page.component.css']
})
export class AdminDashboardPageComponent implements OnInit {

  constructor(public titleService: TitleService, public userAccountService: UserAccountService) {
    titleService.title = 'Admin Dashboard';
    titleService.action1 = 'Dashboard';
  }

  ngOnInit(): void {
    const userloggedIn = localStorage.getItem('loggedIn');
    this.userAccountService.setUserLoggedIn(userloggedIn ? true : false);
  }

}
