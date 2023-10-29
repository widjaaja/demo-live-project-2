import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { SetupScreen } from '../../model/setup-screen';
import { SetupScreenService } from '../../services/setup-screen.service';

@Component({
  selector: 'app-admin-setup-screen-view',
  templateUrl: './admin-setup-screen-view.component.html',
  styleUrls: ['./admin-setup-screen-view.component.css']
})
export class AdminSetupScreenViewComponent implements OnInit {
  public setupId = '';
  setupViewForm: UntypedFormGroup;
  setupScreen: SetupScreen;
  contentLoaded = false;
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder, private setupScreenService: SetupScreenService) { }

  ngOnInit(): void {
    this.getSetupScreenDetail();
    this.setupViewForm = this.formBuilder.group({

      vat: [{ value: '', disabled: true }],
      renewalDiscount: [{ value: '', disabled: true }],
      autoRenewDays: [{ value: '', disabled: true }],
      evaluationPeriod: [{ value: '', disabled: true }],
      evaluationExpiryDays: [{ value: '', disabled: true }],
      basketExpiryHours: [{ value: '', disabled: true }],
      adminEMail: [{ value: '', disabled: true }],
      invoicePrefix: [{ value: '', disabled: true }],
      smtpServerName: [{ value: '', disabled: true }],
      smtpServerPort: [{ value: '', disabled: true }],
      smtpEnableSsl: [{ value: '', disabled: true }],
      smtpUserId: [{ value: '', disabled: true }],
      smtpPassword: [{ value: '', disabled: true }],
      smtpFromName: [{ value: '', disabled: true }],
      brochureDownload: [{ value: '', disabled: true }],
      productDownload: [{ value: '', disabled: true }],
      userManualDownload: [{ value: '', disabled: true }],
      licenseFileName: [{ value: '', disabled: true }],
      pG1AccessCode: [{ value: '', disabled: true }],
      pG2Account: [{ value: '', disabled: true }],
      pG2Password: [{ value: '', disabled: true }],
      autoLogoffTime: [{ value: '', disabled: true }],
      systemLogRetentionDays: [{ value: '', disabled: true }],
    });
  }

  async getSetupScreenDetail() {
    this.setupScreen = await this.setupScreenService.getSetupScreen();
    this.setupViewForm.patchValue({
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
      systemLogRetentionDays: this.setupScreen.systemLogRetentionDays
    });

  }

  get f() { return this.setupViewForm.controls; }

}
