import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-view-page',
  templateUrl: './customer-view-page.component.html',
  styleUrls: ['./customer-view-page.component.css']
})
export class CustomerViewPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoCustomer() {
    this.router.navigateByUrl('/user/customers');
  }

}
