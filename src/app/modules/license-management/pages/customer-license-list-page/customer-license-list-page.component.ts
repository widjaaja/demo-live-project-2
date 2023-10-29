import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { Customer } from '../../../customers/models/customer';
import { CustomerService } from '../../../customers/services/customer.service';
import { LicenseDetails } from '../../model/license-detail';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-customer-license-list-page',
  templateUrl: './customer-license-list-page.component.html',
  styleUrls: ['./customer-license-list-page.component.css']
})
export class CustomerLicenseListPageComponent implements OnInit {
  public customerId = '';
  public licenseDetails: LicenseDetails;
  public contentLoaded = false;
  public noCustomer = false;
  public customer;
  constructor(public licenseService: LicenseService, private route: ActivatedRoute, private customerService: CustomerService, public headerService: HeaderService) { }
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.customerId = routeParams.customerRecID;
      this.getMyCustomer();
    });
  }

  async getMyCustomer() {
    let userId = localStorage.getItem('userId');
    this.customer = await this.customerService.getCustomerDetail(userId, this.customerId);
    this.contentLoaded = true;
    if (this.customer.errorMessage === 'Customer ID can not be blank') {
      this.noCustomer = true;
    }
  }

}
