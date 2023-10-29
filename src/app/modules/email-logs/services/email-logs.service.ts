import { Injectable } from '@angular/core';
import { EmailLogs, EmailLogsList } from '../model/email-logs';
import { EmailLogsApiService } from './api/email-logs-api.service';

@Injectable({
  providedIn: 'root'
})
export class EmailLogsService {
  emailLogs: EmailLogsList;
  constructor(private emailLogsApiService: EmailLogsApiService) { }

  async getallEmailLogs(startDate, endDate) {
    await this.emailLogsApiService.getAllEmailLogs(startDate, endDate).then((data: EmailLogsList) => {
      this.emailLogs = data;
    });
    return this.emailLogs;
  }

  async getTemplateDetail(promotionCode) {
    let templateData: EmailLogs;
    await this.emailLogsApiService.getTemplateDetail(promotionCode).then((data: EmailLogs) => {
      templateData = data;
    });
    return templateData;
  }
}
