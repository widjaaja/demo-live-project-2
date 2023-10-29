import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { CustomerService } from '../../../customers/services/customer.service';

@Component({
  selector: 'app-admin-license-edit-page',
  templateUrl: './admin-license-edit-page.component.html',
  styleUrls: ['./admin-license-edit-page.component.css']
})
export class AdminLicenseEditPageComponent implements OnInit {
  public customerId = '';
  public customer;
  public noCustomer = false;
  constructor(private router: Router, private customerService: CustomerService, public headerService: HeaderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.customerId = routeParams.customerRecID;
      this.getMyCustomer();
    });
  }

  async getMyCustomer() {
    let userId = localStorage.getItem('userId');
    this.customer = await this.customerService.getCustomerDetail(userId, this.customerId);
    if (this.customer.errorMessage === 'Customer ID can not be blank') {
      this.noCustomer = true;
    }
    console.log(this.customer);
  }

  backToLicenseList() {
    this.router.navigateByUrl('/user/licenses/' + this.customerId);
  }

}
