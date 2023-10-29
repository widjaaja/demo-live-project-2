import { Component, OnInit } from '@angular/core';
import { EmailTemplate, EmailTemplatesList } from '../../models/email-template';
import { EmailTemplatesService } from '../../services/email-templates.service';

@Component({
  selector: 'app-email-templates-list',
  templateUrl: './email-templates-list.component.html',
  styleUrls: ['./email-templates-list.component.css']
})
export class EmailTemplatesListComponent implements OnInit {
  public emailTemplates: EmailTemplate;
  public emailTemplatesList: EmailTemplatesList;
  public contentLoaded = false;
  public userId = '';
  public productCode = '';
  constructor(private emailTemplateService: EmailTemplatesService) {
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    this.getAllTemplates();
  }

  async getAllTemplates() {
    this.userId = localStorage.getItem('userId');
    this.emailTemplatesList = await this.emailTemplateService.getAllTemplates(this.userId);
    this.emailTemplates = this.emailTemplatesList.emailSettings;
    console.log(this.emailTemplatesList);
    this.contentLoaded = true;
  }

}
