import { Injectable } from '@angular/core';
import { HttpApiService } from './Api/http-api.service';
import { PasswordResetRequest } from '../../modules/user-account/models/user';

@Injectable({
  providedIn: 'root'
})
export class EmailApiService {
  apiUrl = 'email/';
  constructor(private httpApiService: HttpApiService) { }

  //Send user Verification email on register
  async sendVerificationMail(maildata) {
    const url = `${this.apiUrl}SendEmailVerification`;
    await this.httpApiService.postData(url, maildata);
  }

  //Get Verification details
  async getVerifyEmailDetail(maildata) {
    const url = `${this.apiUrl}VerifyEmailDetail`;
    await this.httpApiService.postData(url, maildata);
  }

  //Set Verification details
  async updateVerificationRequestDetail(maildata) {
    const url = `${this.apiUrl}VerifyEmail`;
    return await this.httpApiService.postData(url, maildata);
  }

  async updatePasswordRequestDetail(maildata) {
    const url = `${this.apiUrl}resetpassword`;
    return await this.httpApiService.postData(url, maildata);
  }

  //Send Reset password link
  async sendPasswordResetMail(maildata) {
    const url = `${this.apiUrl}SendPasswordReset`;
    return await this.httpApiService.postData(url, maildata);
  }

  //Get reset password details
  async getPasswordResetDetail(verificationId): Promise<PasswordResetRequest> {
    let response: PasswordResetRequest;
    const url = `${this.apiUrl}PasswordResetDetail?Id=${verificationId}`;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          response = <PasswordResetRequest>data;
        }
      });
    return response;
  }

  async getVerificationRequestDetail(verificationId): Promise<PasswordResetRequest> {
    let response: PasswordResetRequest;
    const url = `${this.apiUrl}VerifyEmailDetail?Id=${verificationId}`;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data !== null) {
          response = <PasswordResetRequest>data;
        }
      });
    return response;
  }
}
