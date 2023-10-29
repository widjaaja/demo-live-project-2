import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit-page',
  templateUrl: './customer-edit-page.component.html',
  styleUrls: ['./customer-edit-page.component.css']
})
export class CustomerEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoCustomer() {
    this.router.navigateByUrl('/user/customers');
  }

}
