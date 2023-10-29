import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { EmailLayout, EmailLayoutsList } from '../../models/email-layout';

@Injectable({
  providedIn: 'root'
})
export class EmailLayoutsApiService {
  apiUrl = 'emaillayout/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAlllayouts(): Promise<EmailLayoutsList> {
    const url = `${this.apiUrl}Get`;
    let layouts: EmailLayoutsList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          layouts = <EmailLayoutsList>data;
        }
      });
    return layouts;
  }

  async getLayoutDetail(layoutName): Promise<EmailLayout> {
    const url = `${this.apiUrl}Get?Id=${layoutName}`;
    let layouts: EmailLayout;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          layouts = <EmailLayout>data;
        }
      });
    return layouts;
  }

  async addLayout(layout) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, layout);
  }

  async updateLayout(layout) {
    const url = `${this.apiUrl}Update`;
    return await this.httpApiService.postData(url, layout);
  }
}
