import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add-edit-page',
  templateUrl: './customer-add-edit-page.component.html',
  styleUrls: ['./customer-add-edit-page.component.css']
})
export class CustomerAddEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BackCustomerList() {
    let userRole = localStorage.getItem('user_role');
    if (userRole == 'ADMIN') {
      this.router.navigateByUrl('/user/customers');
    } else {
      this.router.navigateByUrl('/user/customers');
    }
  }

}
