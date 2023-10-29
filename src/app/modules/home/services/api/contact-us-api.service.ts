import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';

@Injectable({
  providedIn: 'root'
})
export class ContactUsApiService {

  constructor(public httpApiService: HttpApiService) { }

  async sendMail(maildata) {
    const url = `email/SendContactUs`;
    await this.httpApiService.postData(url, maildata)
      .then(data => {
        if (data != null) {
          //customers = <Customer>data;
        }
      });
  }
}
