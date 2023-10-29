import { Injectable } from '@angular/core';
import { HttpApiService } from '../../../../shared/services/Api/http-api.service';
import { EmailLogs, EmailLogsList } from '../../model/email-logs';

@Injectable({
  providedIn: 'root'
})
export class EmailLogsApiService {
  apiUrl = 'transaction/';
  constructor(private httpApiService: HttpApiService) { }

  /**
   *
   * @returns products
   * Method to retrieve products data from backend and pass on to products service
  */
  async getAllEmailLogs(startDate, endDate): Promise<EmailLogsList> {
    const url = `${this.apiUrl}GetTransactionalMessages?StartDate=${startDate}&Enddate=${endDate}`;
    let emailLogs: EmailLogsList;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          emailLogs = <EmailLogsList>data;
        }
      });
    return emailLogs;
  }


  async getTemplateDetail(templateName): Promise<EmailLogs> {
    const url = `${this.apiUrl}GetTransactionalMessageById?Id=${templateName}`;
    let templates: EmailLogs;
    await this.httpApiService.getasyncData(url)
      .then(data => {
        if (data != null) {
          templates = <EmailLogs>data;
        }
      });
    return templates;
  }
}
