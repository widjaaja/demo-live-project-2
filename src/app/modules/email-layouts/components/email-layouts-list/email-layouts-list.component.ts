import { Component, OnInit } from '@angular/core';
import { EmailLayoutsService } from '../../services/email-layouts.service';
import { EmailLayout, EmailLayoutsList } from '../../models/email-layout';

@Component({
  selector: 'app-email-layouts-list',
  templateUrl: './email-layouts-list.component.html',
  styleUrls: ['./email-layouts-list.component.css']
})
export class EmailLayoutsListComponent implements OnInit {
  public emailLayouts: EmailLayout;
  public emailLayoutsList: EmailLayoutsList;
  public contentLoaded = false;
  public userId = '';
  public productCode = '';
  constructor(private emailLayoutsService: EmailLayoutsService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getAllLayouts();
  }

  async getAllLayouts() {
    this.userId = localStorage.getItem('userId');
    this.emailLayoutsList = await this.emailLayoutsService.getAlllayouts();
    this.emailLayouts = this.emailLayoutsList.emailLayouts
    console.log(this.emailLayouts);
    this.contentLoaded = true;
  }
}
