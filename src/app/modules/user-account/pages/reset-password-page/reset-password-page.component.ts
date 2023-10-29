import { Component, OnInit, } from '@angular/core';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../../../customers/services/confirm-password.validator';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../../../shared/services/email.service';
import { Customer, CustomerPwdReset } from '../../../customers/models/customer';
import { CustomerService } from '../../../customers/services/customer.service';
import { PasswordResetRequest } from '../../models/user';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  resetPwdForm: UntypedFormGroup;
  ExpiredLink = false;
  submitted = false;
  verificationCode: string;
  resetSuccess = false;
  passwordResetDetail: PasswordResetRequest;
  constructor(private formBuilder: UntypedFormBuilder, private metaService: MetaService, private sharedService: SharedService, public globalsService: GlobalsService, public route: ActivatedRoute, private emailService: EmailService, private customerService: CustomerService) {
    this.verificationCode = this.route.snapshot.params.verificationCode;
    this.getRequestDetails();
  }



  ngOnInit(): void {

    this.metaService.setTitle(this.globalsService.resetPwdPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.resetPwdPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.resetPwdPageMetaDescription);

    this.resetPwdForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
    },
      {
        validator: ConfirmPasswordValidator("password", "confirm_password")
      });
  }

  async getRequestDetails() {
    this.passwordResetDetail = await this.emailService.getPasswordResetDetail(this.verificationCode);
    if (this.passwordResetDetail.isVerificationCodeUsed === 1) {
      this.ExpiredLink = true;
      this.sharedService.showMessage({ 'type': 'danger', 'message': 'Link Expired !' });
      //window.location.href = window.location.origin + '/page-404';
    }
    this.submitted = true;
  }


  // convenience getter for easy access to form fields
  get f() { return this.resetPwdForm.controls; }

  async onSubmit() {
    this.submitted = true;
    let customer: CustomerPwdReset = new CustomerPwdReset();
    if (this.resetPwdForm.invalid) {
      return;
    }
    customer.userID = this.passwordResetDetail.userId;
    customer.password = this.resetPwdForm.value['password'];

    let result = await this.customerService.updatePassword(customer);
    console.log(result);
    if (result == true) {
      let maildata = new PasswordResetRequest();
      maildata.verificationCode = this.verificationCode;
      let response = await this.emailService.updatePasswordRequestDetail(maildata);

      this.resetSuccess = true;
      this.resetPwdForm.reset();
    }
  }
}
