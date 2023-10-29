import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { CustomerService } from '../../../customers/services/customer.service';
import { LicenseServerDetail, SingleLicenseDetail } from '../../model/license-detail';
import { LicenseService } from '../../services/license.service';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.css']
})
export class LicenseDetailComponent implements OnInit {
  public licenseId = '';
  LicenseViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  licenseObj: SingleLicenseDetail;
  canViewNotes = false;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private licenseService: LicenseService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.licenseId = routeParams.licenseKey;
      this.getLicenseDetail(this.licenseId);
    });
    let userRole = localStorage.getItem('user_role');
    if (userRole === 'ADMIN' || userRole === 'PARTNER') {
      this.canViewNotes = true;
    }

    this.LicenseViewForm = this.formBuilder.group({

      maintenanceServer: [{ value: '', disabled: true }],
      maintenanceDomain: [{ value: '', disabled: true }],
      maintenanceExpiryDate: [{ value: '', disabled: true }],
      loggingServer: [{ value: '', disabled: true }],
      loggingDomain: [{ value: '', disabled: true }],
      loggingExpiryDate: [{ value: '', disabled: true }],
      schedulerServer: [{ value: '', disabled: true }],
      schedulerDomain: [{ value: '', disabled: true }],
      schedulerExpiryDate: [{ value: '', disabled: true }],
      analysisServer: [{ value: '', disabled: true }],
      analysisDomain: [{ value: '', disabled: true }],
      analysisExpiryDate: [{ value: '', disabled: true }],
      notes: [{ value: '', disabled: true }],
      autoRenew: [{ value: '', disabled: true }],
      productCode: [{ value: '', disabled: true }],
      evaluation: [{ value: '', disabled: true }],
      active: [{ value: '', disabled: true }],
      licenseKey: [{ value: '', disabled: true }],
    });
  }


  get f() { return this.LicenseViewForm.controls; }

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

    this.LicenseViewForm.patchValue({
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

}
