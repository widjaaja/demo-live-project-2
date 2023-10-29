import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { CustomerService } from '../../../customers/services/customer.service';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-license-server-detail',
  templateUrl: './license-server-detail.component.html',
  styleUrls: ['./license-server-detail.component.css']
})
export class LicenseServerDetailComponent implements OnInit {
  public licenseKey = '';
  public customerId = '';
  public contentLoaded = false;
  public licenseServerDetails;
  constructor(private route: ActivatedRoute, private customerService: CustomerService, private headerService: HeaderService, private LicenseService: LicenseService) { }
  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.licenseKey = routeParams.licenseKey;
      this.customerId = routeParams.customerRecID;
      this.getLicenseDetail();
    });
  }

  async getLicenseDetail() {
    let userId = localStorage.getItem('userId');
    this.licenseServerDetails = await this.LicenseService.getLicenseServerDetail(userId, this.licenseKey);
  }

}
