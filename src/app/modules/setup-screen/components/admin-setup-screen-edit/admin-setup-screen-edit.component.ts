import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SetupScreen } from '../../model/setup-screen';
import { SetupScreenService } from '../../services/setup-screen.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-setup-screen-edit',
  templateUrl: './admin-setup-screen-edit.component.html',
  styleUrls: ['./admin-setup-screen-edit.component.css']
})
export class AdminSetupScreenEditComponent implements OnInit {
  public setupId = '';
  setupEditForm: UntypedFormGroup;
  setupScreen: SetupScreen;
  contentLoaded = false;
  submitted = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private setupScreenService: SetupScreenService,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getSetupScreenDetail();
    this.setupEditForm = this.formBuilder.group({
      vat: ['', Validators.required],
      renewalDiscount: ['', Validators.required],
      autoRenewDays: ['', Validators.required],
      evaluationPeriod: ['', Validators.required],
      evaluationExpiryDays: ['', Validators.required],
      basketExpiryHours: ['', Validators.required],
      adminEMail: ['', Validators.required],
      invoicePrefix: ['', Validators.required],
      smtpServerName: ['', Validators.required],
      smtpServerPort: ['', Validators.required],
      smtpEnableSsl: [''],
      smtpUserId: [''],
      smtpPassword: [''],
      smtpFromName: ['', Validators.required],
      brochureDownload: ['', Validators.required],
      productDownload: ['', Validators.required],
      userManualDownload: ['', Validators.required],
      licenseFileName: ['', Validators.required],
      pG1AccessCode: [''],
      pG2Account: [''],
      pG2Password: [''],
      autoLogoffTime: [''],
      systemLogRetentionDays: ['']
    });
  }

  async getSetupScreenDetail() {
    this.setupScreen = await this.setupScreenService.getSetupScreen();
    this.setupEditForm.patchValue({
      vat: this.setupScreen.vat,
      renewalDiscount: this.setupScreen.renewalDiscount,
      autoRenewDays: this.setupScreen.autoRenewDays,
      evaluationPeriod: this.setupScreen.evaluationPeriod,
      evaluationExpiryDays: this.setupScreen.evaluationExpiryDays,
      basketExpiryHours: this.setupScreen.basketExpiryHours,
      adminEMail: this.setupScreen.adminEMail,
      invoicePrefix: this.setupScreen.invoicePrefix,
      smtpServerName: this.setupScreen.smtpServerName,
      smtpServerPort: this.setupScreen.smtpServerPort,
      smtpEnableSsl: this.setupScreen.smtpEnableSsl,
      smtpUserId: this.setupScreen.smtpUserId,
      smtpPassword: this.setupScreen.smtpPassword,
      smtpFromName: this.setupScreen.smtpFromName,
      brochureDownload: this.setupScreen.brochureDownload,
      productDownload: this.setupScreen.productDownload,
      userManualDownload: this.setupScreen.userManualDownload,
      licenseFileName: this.setupScreen.licenseFileName,
      pG1AccessCode: this.setupScreen.pG1AccessCode,
      pG2Account: this.setupScreen.pG2Account,
      pG2Password: this.setupScreen.pG2Password,
      autoLogoffTime: this.setupScreen.autoLogoffTime,
      systemLogRetentionDays: this.setupScreen.systemLogRetentionDays,
    });

  }

  get f() { return this.setupEditForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.setupEditForm.invalid) {
      return;
    }
    //console.log(this.selectedCountry); return false;
    let setupObj: SetupScreen = new SetupScreen();
    setupObj.vat = Number(this.setupEditForm.value['vat']);
    setupObj.renewalDiscount = Number(this.setupEditForm.value['renewalDiscount']);
    setupObj.autoRenewDays = Number(this.setupEditForm.value['autoRenewDays']);
    setupObj.evaluationPeriod = this.setupEditForm.value['evaluationPeriod'];
    setupObj.evaluationExpiryDays = this.setupEditForm.value['evaluationExpiryDays'];
    setupObj.basketExpiryHours = this.setupEditForm.value['basketExpiryHours'];
    setupObj.adminEMail = this.setupEditForm.value['adminEMail'];
    setupObj.invoicePrefix = this.setupEditForm.value['invoicePrefix'];
    setupObj.smtpServerName = this.setupEditForm.value['smtpServerName'];
    setupObj.smtpServerPort = this.setupEditForm.value['smtpServerPort'];
    setupObj.smtpEnableSsl = this.setupEditForm.value['smtpEnableSsl'];
    setupObj.smtpUserId = this.setupEditForm.value['smtpUserId'];
    setupObj.smtpPassword = this.setupEditForm.value['smtpPassword'];
    setupObj.smtpFromName = this.setupEditForm.value['smtpFromName'];
    setupObj.brochureDownload = this.setupEditForm.value['brochureDownload'];
    setupObj.productDownload = this.setupEditForm.value['productDownload'];
    setupObj.userManualDownload = this.setupEditForm.value['userManualDownload'];
    setupObj.licenseFileName = this.setupEditForm.value['licenseFileName'];
    setupObj.pG1AccessCode = this.setupEditForm.value['pG1AccessCode'];
    setupObj.pG2Account = this.setupEditForm.value['pG2Account'];
    setupObj.pG2Password = this.setupEditForm.value['pG2Password'];
    setupObj.autoLogoffTime = this.setupEditForm.value['autoLogoffTime'];
    setupObj.systemLogRetentionDays = this.setupEditForm.value['systemLogRetentionDays'];
    const userId = localStorage.getItem('userId');
    setupObj.userID = userId;
    const result = await this.setupScreenService.updateSetup(setupObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/admin/setup-screens');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Setup updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }


}
