import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { SingleLicenseDetail } from '../../model/license-detail';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-admin-license-edit',
  templateUrl: './admin-license-edit.component.html',
  styleUrls: ['./admin-license-edit.component.css']
})
export class AdminLicenseEditComponent implements OnInit {
  public licenseId = '';
  public customerId = '';
  LicenseEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  licenseObj: SingleLicenseDetail;
  canViewNotes = false;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private licenseService: LicenseService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.customerId = routeParams.customerRecID;
      this.licenseId = routeParams.licenseKey;
      this.getLicenseDetail(this.licenseId);
    });
    let userRole = localStorage.getItem('user_role');
    if (userRole === 'ADMIN' || userRole === 'PARTNER') {
      this.canViewNotes = true;
    }
    this.LicenseEditForm = this.formBuilder.group({

      maintenanceServer: [''],
      maintenanceDomain: [''],
      maintenanceExpiryDate: [''],
      loggingServer: [''],
      loggingDomain: [''],
      loggingExpiryDate: [''],
      schedulerServer: [''],
      schedulerDomain: [''],
      schedulerExpiryDate: [''],
      analysisServer: [''],
      analysisDomain: [''],
      analysisExpiryDate: [''],
      notes: [''],
      autoRenew: [''],
      productCode: ['', Validators.required],
      evaluation: [''],
      active: [''],
      licenseKey: ['', Validators.required],
    });
  }

  async getLicenseDetail(promotionCode) {
    let userId = localStorage.getItem('userId');
    this.licenseObj = await this.licenseService.getLicenseDetailById(userId, this.licenseId);
    //{ year: 2018, month: 3, day: 28 }
    const schedulerYear: number = new Date(this.licenseObj.schedulerExpiryDate).getFullYear();
    const schedulerMonth: number = new Date(this.licenseObj.schedulerExpiryDate).getMonth() + 1;
    const schedulerDay: number = new Date(this.licenseObj.schedulerExpiryDate).getDate();

    const maintenanceYear: number = new Date(this.licenseObj.maintenanceExpiryDate).getFullYear();
    const maintenanceMonth: number = new Date(this.licenseObj.maintenanceExpiryDate).getMonth() + 1;
    const maintenanceDay: number = new Date(this.licenseObj.maintenanceExpiryDate).getDate();

    const analysisYear: number = new Date(this.licenseObj.analysisExpiryDate).getFullYear();
    const analysisMonth: number = new Date(this.licenseObj.analysisExpiryDate).getMonth() + 1;
    const analysisDay: number = new Date(this.licenseObj.analysisExpiryDate).getDate();


    const loggingYear: number = new Date(this.licenseObj.loggingExpiryDate).getFullYear();
    const loggingMonth: number = new Date(this.licenseObj.loggingExpiryDate).getMonth() + 1;
    const loggingDay: number = new Date(this.licenseObj.loggingExpiryDate).getDate();

    this.LicenseEditForm.patchValue({
      active: this.licenseObj.active,
      evaluation: this.licenseObj.evaluation,
      productCode: this.licenseObj.productCode,
      notes: this.licenseObj.notes,
      licenseKey: this.licenseObj.licenseKey,
      autoRenew: this.licenseObj.autoRenew,
      loggingDomain: this.licenseObj.loggingDomain,
      loggingServer: this.licenseObj.loggingServer,
      analysisDomain: this.licenseObj.analysisDomain,
      analysisServer: this.licenseObj.analysisServer,
      schedulerDomain: this.licenseObj.schedulerDomain,
      schedulerServer: this.licenseObj.schedulerServer,
      maintenanceDomain: this.licenseObj.maintenanceDomain,
      maintenanceServer: this.licenseObj.maintenanceServer,
      schedulerExpiryDate: { 'year': schedulerYear, 'month': schedulerMonth, 'day': schedulerDay },
      analysisExpiryDate: { 'year': analysisYear, 'month': analysisMonth, 'day': analysisDay },
      loggingExpiryDate: { 'year': loggingYear, 'month': loggingMonth, 'day': loggingDay },
      maintenanceExpiryDate: { 'year': maintenanceYear, 'month': maintenanceMonth, 'day': maintenanceDay },
      //endDate: { 'year': endyear, 'month': endmonth, 'day': endday },
      //startDate: { 'year': year, 'month': month, 'day': day },
    });
    this.contentLoaded = true;
  }

  get f() { return this.LicenseEditForm.controls; }
   
  async onSubmit() {
    this.submitted = true;
    this.LicenseEditForm.get('maintenanceExpiryDate').clearValidators();
    this.LicenseEditForm.get('maintenanceExpiryDate').updateValueAndValidity();
    this.LicenseEditForm.get('loggingExpiryDate').clearValidators();
    this.LicenseEditForm.get('loggingExpiryDate').updateValueAndValidity();
    this.LicenseEditForm.get('analysisExpiryDate').clearValidators();
    this.LicenseEditForm.get('analysisExpiryDate').updateValueAndValidity();
    this.LicenseEditForm.get('schedulerExpiryDate').clearValidators();
    this.LicenseEditForm.get('schedulerExpiryDate').updateValueAndValidity();
    if (this.LicenseEditForm.invalid) {
      console.log(this.LicenseEditForm);
      const controls = this.LicenseEditForm.controls;
      for (const name in controls) {
        if (controls[name].invalid) {
          console.log(name);
        }
      }
      return;
    }
    let licenseObj = new SingleLicenseDetail();
    licenseObj.analysisDomain = this.LicenseEditForm.value['analysisDomain'];
    licenseObj.analysisServer = this.LicenseEditForm.value['analysisServer'];
    licenseObj.analysisExpiryDate = this.LicenseEditForm.value['analysisExpiryDate'];
    licenseObj.maintenanceServer = this.LicenseEditForm.value['maintenanceServer'];
    licenseObj.maintenanceDomain = this.LicenseEditForm.value['maintenanceDomain'];
    licenseObj.maintenanceExpiryDate = this.LicenseEditForm.value['maintenanceExpiryDate'];
    licenseObj.loggingServer = this.LicenseEditForm.value['loggingServer'];
    licenseObj.loggingDomain = this.LicenseEditForm.value['loggingDomain'];
    licenseObj.loggingExpiryDate = this.LicenseEditForm.value['loggingExpiryDate'];
    licenseObj.schedulerServer = this.LicenseEditForm.value['schedulerServer'];
    licenseObj.schedulerDomain = this.LicenseEditForm.value['schedulerDomain'];
    licenseObj.schedulerExpiryDate = this.LicenseEditForm.value['schedulerExpiryDate'];
    licenseObj.notes = this.LicenseEditForm.value['notes'];
    licenseObj.active = this.LicenseEditForm.value['active'] == true ? 1 : 0;
    licenseObj.autoRenew = this.LicenseEditForm.value['autoRenew'] == true ? 1 : 0;
    licenseObj.evaluation = this.LicenseEditForm.value['evaluation'] == true ? 1 : 0;
    licenseObj.productCode = this.LicenseEditForm.value['productCode'];
    licenseObj.licenseKey = this.LicenseEditForm.value['licenseKey'];
    let userId = localStorage.getItem('userId');
    licenseObj.userID = userId;
    licenseObj.licenseId = this.licenseObj.licenseId;
    if (licenseObj.maintenanceExpiryDate !== null) {
      licenseObj.maintenanceExpiryDate = licenseObj.maintenanceExpiryDate['year'] + '-' + licenseObj.maintenanceExpiryDate['month'] + '-' + licenseObj.maintenanceExpiryDate['day'];
    }
    if (licenseObj.schedulerExpiryDate !== null) {
      licenseObj.schedulerExpiryDate = licenseObj.schedulerExpiryDate['year'] + '-' + licenseObj.schedulerExpiryDate['month'] + '-' + licenseObj.schedulerExpiryDate['day'];
    }
    if (licenseObj.analysisExpiryDate !== null) {
      licenseObj.analysisExpiryDate = licenseObj.analysisExpiryDate['year'] + '-' + licenseObj.analysisExpiryDate['month'] + '-' + licenseObj.analysisExpiryDate['day'];
    }
    if (licenseObj.loggingExpiryDate !== null) {
      licenseObj.loggingExpiryDate = licenseObj.loggingExpiryDate['year'] + '-' + licenseObj.loggingExpiryDate['month'] + '-' + licenseObj.loggingExpiryDate['day'];
    }

    let result = await this.licenseService.updateLicense(licenseObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/user/licenses/' + this.customerId);
      this.sharedService.showMessage({ 'type': 'success', 'message': 'License details updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['error'] });
    }
  }

}
