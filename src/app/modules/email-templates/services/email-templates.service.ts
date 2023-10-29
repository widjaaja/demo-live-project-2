import { Injectable } from '@angular/core';
import { EmailTemplate, EmailTemplatesList } from '../models/email-template';
import { EmailTemplatesApiService } from './api/email-templates-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplatesService {

  emailTemplates: EmailTemplatesList;
  constructor(private emailTemplatesApiService: EmailTemplatesApiService) { }

  async getAllTemplates(userId) {
    await this.emailTemplatesApiService.getAllTemplates().then((data: EmailTemplatesList) => {
      this.emailTemplates = data;
    });
    return this.emailTemplates;
  }

  async getTemplateDetail(promotionCode) {
    let templateData: EmailTemplate;
    await this.emailTemplatesApiService.getTemplateDetail(promotionCode).then((data: EmailTemplate) => {
      templateData = data;
    });
    return templateData;
  }

  async addPromo(templateObj) {
    return await this.emailTemplatesApiService.addTemplate(templateObj);
  }

  async updateTemplate(templateObj) {
    return await this.emailTemplatesApiService.updateTemplate(templateObj);
  }
}
