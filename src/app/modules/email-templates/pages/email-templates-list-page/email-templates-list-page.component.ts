import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { HeaderService } from '../../../../layouts/main/header/header.service';
@Component({
  selector: 'app-email-templates-list-page',
  templateUrl: './email-templates-list-page.component.html',
  styleUrls: ['./email-templates-list-page.component.css']
})
export class EmailTemplatesListPageComponent implements OnInit {

  constructor(public titleService: TitleService, public headerService: HeaderService) {
    titleService.title = 'Email Templates';
    titleService.action1 = 'Email templates';
    titleService.action2 = 'Dashboard';
    titleService.action2Link = '/admin/dashboard';
  }

  ngOnInit(): void {
  }

}
