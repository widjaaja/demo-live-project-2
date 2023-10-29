import { Component, OnInit } from '@angular/core';
import { EmailLogs, EmailLogsList } from '../../model/email-logs';
import { EmailLogsService } from '../../services/email-logs.service';

@Component({
  selector: 'app-email-logs-list',
  templateUrl: './email-logs-list.component.html',
  styleUrls: ['./email-logs-list.component.css']
})
export class EmailLogsListComponent implements OnInit {
  emailLogs: EmailLogsList;
  contentLoaded = false;
  startDate = '';
  endDate = '';
  constructor(private emailLogsService: EmailLogsService) { }

  ngOnInit(): void {
    this.getallEmailLogs();
  }

  async getallEmailLogs() {
    this.emailLogs = await this.emailLogsService.getallEmailLogs('', '');
    this.contentLoaded = true;
  }



  async submitFilter() {
    let tmpStartDate = '';
    if (this.startDate == null) { this.startDate = ''; }
    else if (typeof this.startDate['year'] !== 'undefined') {
      tmpStartDate = this.startDate['year'] + '-' + this.startDate['month'] + '-' + this.startDate['day'];
    }
    let tmpEndDate = '';
    if (this.endDate == null) { this.endDate = ''; }
        else if (typeof this.endDate['year'] !== 'undefined') {
      tmpEndDate = this.endDate['year'] + '-' + this.endDate['month'] + '-' + this.endDate['day'];
    }
    this.emailLogs = await this.emailLogsService.getallEmailLogs(tmpStartDate, tmpEndDate);


  }

}
