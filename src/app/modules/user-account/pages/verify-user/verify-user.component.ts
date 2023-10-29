import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from '../../../../shared/services/email.service';
import { SharedService } from '../../../../shared/services/shared.service';
import { PasswordResetRequest } from '../../models/user';
@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {
  verificationCode: string;
  verificationDetail: PasswordResetRequest;
  constructor(public route: ActivatedRoute, private emailService: EmailService, private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.verificationCode = this.route.snapshot.params.verificationCode;
    this.getRequestDetails();
  }

  async getRequestDetails() {
    
    this.verificationDetail = await this.emailService.getVerificationRequestDetail(this.verificationCode);
    if (this.verificationDetail.isVerificationCodeUsed === 1) {
      this.router.navigateByUrl('/login');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Link already verified.Please try logging in!' });
    } else {
      let maildata = new PasswordResetRequest();
      maildata.verificationCode = this.verificationCode;
      let response = await this.emailService.updateVerificationRequestDetail(maildata);
    }
  }
}
