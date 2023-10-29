import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { EmailLogs } from '../../model/email-logs';
import { EmailLogsService } from '../../services/email-logs.service';

@Component({
  selector: 'app-email-logs-view',
  templateUrl: './email-logs-view.component.html',
  styleUrls: ['./email-logs-view.component.css']
})
export class EmailLogsViewComponent implements OnInit {
  public templateName = '';
  templateViewForm: UntypedFormGroup;
  emailTemplateObj: EmailLogs;
  content = '';
  contentLoaded = false;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private emailTemplatesService: EmailLogsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.templateName = routeParams.templateName;
      this.getLayoutDetail();
    });
    this.templateViewForm = this.formBuilder.group({
      content: [{ value: '', disabled: true }],
    });
  }
  //GetTransactionalMessageById
  async getLayoutDetail() {
    this.emailTemplateObj = await this.emailTemplatesService.getTemplateDetail(this.templateName);

    //let emailTemplate = this.emailTemplateObj['emailSettings'][0];
    this.templateViewForm.patchValue({
      //name: emailTemplate.name,
      content: this.emailTemplateObj.contentHtml,
      //description: emailTemplate.description,
      //subject: emailTemplate.subject,
      //fromName: emailTemplate.fromName,
      //fromAddress: emailTemplate.fromAddress,
      //emailLayout: emailTemplate.emailLayout,
      //enabled: emailTemplate.enabled,

    });
    this.content = this.emailTemplateObj.contentHtml;
    this.contentLoaded = true;
  }

  get f() { return this.templateViewForm.controls; }

}
