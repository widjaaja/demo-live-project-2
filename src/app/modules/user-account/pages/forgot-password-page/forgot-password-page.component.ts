import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { UserAccountService } from '../../services/user-account.service';
import { AuthenticateUser } from '../../models/user';
import { GlobalsService } from '../../../../globals.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { EmailService } from '../../../../shared/services/email.service';
import { CustomerVerificationEmail } from '../../../customers/models/customer';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent implements OnInit {
  forgotPwdForm: UntypedFormGroup;
  submitted = false;
  constructor(private formBuilder: UntypedFormBuilder, public userAccountService: UserAccountService, private metaService: MetaService, public globalsService: GlobalsService, private sharedService: SharedService, private emailService: EmailService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.forgotPwdPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.forgotPwdPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.forgotPwdPageMetaDescription);
    this.forgotPwdForm = this.formBuilder.group({
      userId: ['', [Validators.required]],
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.forgotPwdForm.controls; }

  async onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgotPwdForm.invalid) {
      return;
    }
    let forgotPwdData: CustomerVerificationEmail = new CustomerVerificationEmail();
    forgotPwdData.userId = this.forgotPwdForm.value['userId'];
    let result = await this.emailService.sendPasswordResetMail(forgotPwdData);
    console.log(result);
    if (result['status'] == 200) {

      this.sharedService.showMessage({ 'type': 'success', 'message': 'If the email account exists in our system, Password reset link has been successfully!' });
    } else {

      this.sharedService.showMessage({ 'type': 'danger', 'message': result['error'] });
    }
  }

}
