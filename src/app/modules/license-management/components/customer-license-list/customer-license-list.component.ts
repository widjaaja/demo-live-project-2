import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { LicenseDetails, RenewLicenseObj } from '../../model/license-detail';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-customer-license-list',
  templateUrl: './customer-license-list.component.html',
  styleUrls: ['./customer-license-list.component.css']
})
export class CustomerLicenseListComponent implements OnInit {
  public customerId = '';
  public licenseDetails: LicenseDetails;
  public contentLoaded = false;
  public adminUser = false;

  constructor(private route: ActivatedRoute, private licenseService: LicenseService, private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.customerId = routeParams.customerRecID;
      this.getMyLicense();
      let userRole = localStorage.getItem('user_role');
      if (userRole === 'ADMIN') {
        this.adminUser = true;
      }
    });
  }

  async getMyLicense() {
    let userId = localStorage.getItem('userId');
    this.licenseDetails = await this.licenseService.getCustomerLicenseDetail(userId, this.customerId);
    this.contentLoaded = true;
  }

  generateLicense(licenseId) {
    let userId = localStorage.getItem('userId');
    //this.licenseService.generateLicense(userId, licenseId);
    //this.router.navigateByUrl('/license/download/' + userId + '/' + licenseId);
    return window.open(window.location.origin + '/api/license/download?UserID=' + userId + '&LicenseID=' + licenseId);
  }

  async renewLicense(licenseid) {
    const userId = localStorage.getItem('userId');
    const referrerUrl = localStorage.getItem('referrerUrl');
    let renewLicenseObj = new RenewLicenseObj;
    renewLicenseObj.licenseID = licenseid;
    renewLicenseObj.userID = userId;
    renewLicenseObj.referredByURL = referrerUrl;
    let result = await this.licenseService.renewLicense(renewLicenseObj);
    if (result['body']['isSuccess'] === true)
    {
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Complete the renewal by proceed to checkout' });
      window.location.reload();
    }
    else {
        this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }

}
