import { Injectable } from '@angular/core';
import { EmailApiService } from './email-api.service';
import { PasswordResetRequest } from '../../modules/user-account/models/user';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(public emailApiService: EmailApiService) { }
  sendVerificationMail(mailData) {
    this.emailApiService.sendVerificationMail(mailData);
  }

  async sendPasswordResetMail(mailData) {
    return await this.emailApiService.sendPasswordResetMail(mailData);
  }

  async getPasswordResetDetail(mailData) {
    let passwordResetDetail: PasswordResetRequest;
    await this.emailApiService.getPasswordResetDetail(mailData).then((data: PasswordResetRequest) => {
      passwordResetDetail = data;
    });
    return passwordResetDetail;
  }

  async getVerificationRequestDetail(mailData) {
    let verificationDetail: PasswordResetRequest;
    await this.emailApiService.getVerificationRequestDetail(mailData).then((data: PasswordResetRequest) => {
      verificationDetail = data;
    });
    return verificationDetail;
  }

  async updateVerificationRequestDetail(mailData) {
    await this.emailApiService.updateVerificationRequestDetail(mailData);
  }

  async updatePasswordRequestDetail(mailData) {
    await this.emailApiService.updatePasswordRequestDetail(mailData);
  }
  
  
}
