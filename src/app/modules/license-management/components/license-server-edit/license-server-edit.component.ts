import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { LicenseServerDetail, LicenseServerDetails, SingleLicenseDetail, SingleLicenseServerDetails } from '../../model/license-detail';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-license-server-edit',
  templateUrl: './license-server-edit.component.html',
  styleUrls: ['./license-server-edit.component.css']
})
export class LicenseServerEditComponent implements OnInit {
  public licenseServerId = '';
  public customerId = '';
  LicenseServerEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  licenseServerDetails: SingleLicenseServerDetails;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private licenseService: LicenseService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.customerId = routeParams.customerRecID;
      this.licenseServerId = routeParams.licenseServerRecId;
      this.getLicenseServerDetail();
    });
    this.LicenseServerEditForm = this.formBuilder.group({

      serverName: [''],
      description: [''],
      active: [''],
      sqlServerEdition: [''],
      });
  }

  async getLicenseServerDetail() {
    let userId = localStorage.getItem('userId');
    
    this.licenseServerDetails = await this.licenseService.getLicenseServerDetailById(userId, this.licenseServerId);
    this.LicenseServerEditForm.patchValue({
      active: this.licenseServerDetails.licenseServerDetails[0]['active'],
      serverName: this.licenseServerDetails.licenseServerDetails[0]['serverName'],
      description: this.licenseServerDetails.licenseServerDetails[0]['description'],
      sqlServerEdition: this.licenseServerDetails.licenseServerDetails[0]['sqlServerEdition'],
      });
    this.contentLoaded = true;
  }

  get f() { return this.LicenseServerEditForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.LicenseServerEditForm.invalid) {
      console.log(this.LicenseServerEditForm);
      return;
    }
    let licenseServerObj = new LicenseServerDetail();
    licenseServerObj.serverName = this.LicenseServerEditForm.value['serverName'];
    licenseServerObj.sqlServerEdition = this.LicenseServerEditForm.value['sqlServerEdition'];
    licenseServerObj.description = this.LicenseServerEditForm.value['description'];
    licenseServerObj.active = this.LicenseServerEditForm.value['active'];
    let userId = localStorage.getItem('userId');
    licenseServerObj.userID = userId;
    licenseServerObj.licenseId = this.licenseServerDetails.licenseServerDetails[0].licenseId;

    const result = await this.licenseService.updateLicenseServer(licenseServerObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/user/licenses/' + this.customerId);
      this.sharedService.showMessage({ 'type': 'success', 'message': 'License server details updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }
}
