import { Injectable } from '@angular/core';
import { ContactUsApiService } from './api/contact-us-api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(public contactusApiService: ContactUsApiService) { }

  sendMail(mailData) {
    this.contactusApiService.sendMail(mailData);
  }
}
