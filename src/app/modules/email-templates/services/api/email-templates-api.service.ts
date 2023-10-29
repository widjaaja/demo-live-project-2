import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { EmailTemplate, EmailTemplatesList } from '../../models/email-template';

@Injectable({
  providedIn: 'root'
})
export class EmailTemplatesApiService {
  apiUrl = 'emailsettings/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllTemplates(): Promise<EmailTemplatesList> {
    const url = `${this.apiUrl}Get`;
    let templates: EmailTemplatesList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          templates = <EmailTemplatesList>data;
        }
      });
    return templates;
  }

  async getTemplateDetail(templateName): Promise<EmailTemplate> {
    const url = `${this.apiUrl}Get?Name=${templateName}`;
    let templates: EmailTemplate;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          templates = <EmailTemplate>data;
        }
      });
    return templates;
  }

  async addTemplate(template) {
    const url = `${this.apiUrl}Create`;
    return await this.httpApiService.postData(url, template);
  }

  async updateTemplate(template) {
    const url = `${this.apiUrl}Update`;
    return await this.httpApiService.postData(url, template);
  }
}
