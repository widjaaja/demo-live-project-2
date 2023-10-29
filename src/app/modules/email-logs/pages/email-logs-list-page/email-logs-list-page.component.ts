import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../layouts/main/header/header.service';
import { TitleService } from '../../../../layouts/main/page-title/title.service';

@Component({
  selector: 'app-email-logs-list-page',
  templateUrl: './email-logs-list-page.component.html',
  styleUrls: ['./email-logs-list-page.component.css']
})
export class EmailLogsListPageComponent implements OnInit {

  constructor(public titleService: TitleService, public headerService: HeaderService) {
    titleService.title = 'Email Logs';
    titleService.action1 = 'Email logs';
    titleService.action2 = 'Dashboard';
    titleService.action2Link = '/admin/dashboard';}

  ngOnInit(): void {
  }

}
