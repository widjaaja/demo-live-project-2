import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.css']
})
export class CustomerListPageComponent implements OnInit {
  addallowed = false;
  constructor(public titleService: TitleService, private router: Router, public headerService: HeaderService, public customerService: CustomerService) {
    titleService.title = 'Customers';
    titleService.action1 = 'Customers';
    titleService.action2 = 'Dashboard';
    titleService.action2Link = '/admin/dashboard';
  }

  ngOnInit(): void {
    const userRole = localStorage.getItem('user_role');
    if ((userRole === 'ADMIN') || (userRole === 'PARTNER')) {
      this.addallowed = true;
    }
  }

  AddCustomer() {
    this.router.navigateByUrl('/user/customers/add');

  }

}
