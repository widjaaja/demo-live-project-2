import { Injectable } from '@angular/core';
import { EmailLayoutsApiService } from './api/email-layouts-api.service';
import { EmailLayout, EmailLayoutsList } from '../models/email-layout';

@Injectable({
  providedIn: 'root'
})
export class EmailLayoutsService {

  emailLayouts: EmailLayoutsList;
  constructor(private emailLayoutsApiService: EmailLayoutsApiService) { }

  async getAlllayouts() {
    await this.emailLayoutsApiService.getAlllayouts().then((data: EmailLayoutsList) => {
      this.emailLayouts = data;
    });
    return this.emailLayouts;
  }

  async getLayoutDetail(layoutName) {
    let layoutData: EmailLayout;
    await this.emailLayoutsApiService.getLayoutDetail(layoutName).then((data: EmailLayout) => {
      layoutData = data;
    });
    return layoutData;
  }

  async addLayout(layoutObj) {
    return await this.emailLayoutsApiService.addLayout(layoutObj);
  }

  async updateLayout(layoutObj) {
    return await this.emailLayoutsApiService.updateLayout(layoutObj);
  }
}
