import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-email-layouts-list-page',
  templateUrl: './email-layouts-list-page.component.html',
  styleUrls: ['./email-layouts-list-page.component.css']
})
export class EmailLayoutsListPageComponent implements OnInit {

  constructor(public titleService: TitleService, public headerService: HeaderService) {
    titleService.title = 'Email Layouts';
    titleService.action1 = 'Email Layouts';
    titleService.action2 = 'Dashboard';
    titleService.action2Link = '/admin/dashboard';
  }

  ngOnInit(): void {
  }

  AddEmailLayout() {

  }

}
