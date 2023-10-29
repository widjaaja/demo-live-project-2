import { Component, OnInit } from '@angular/core';
import { EmailTemplatesService } from '../../services/email-templates.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailTemplate } from '../../models/email-template';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-email-templates-view',
  templateUrl: './email-templates-view.component.html',
  styleUrls: ['./email-templates-view.component.css']
})
export class EmailTemplatesViewComponent implements OnInit {
  public templateName = '';
  templateViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  emailTemplateObj: EmailTemplate;
  content = '';
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private emailTemplatesService: EmailTemplatesService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.templateName = routeParams.templateName;
      this.getLayoutDetail();
    });
    this.templateViewForm = this.formBuilder.group({

      name: [{ value: '', disabled: true }],
      content: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      subject: [{ value: '', disabled: true }],
      fromName: [{ value: '', disabled: true }],
      fromAddress: [{ value: '', disabled: true }],
      emailLayout: [{ value: '', disabled: true }],
      enabled: [{ value: '', disabled: true }],
      
    });
  }

  async getLayoutDetail() {
    this.emailTemplateObj = await this.emailTemplatesService.getTemplateDetail(this.templateName);
    
    let emailTemplate = this.emailTemplateObj['emailSettings'][0];
    this.templateViewForm.patchValue({
      name: emailTemplate.name,
      content: emailTemplate.content,
      description: emailTemplate.description,
      subject: emailTemplate.subject,
      fromName: emailTemplate.fromName,
      fromAddress: emailTemplate.fromAddress,
      emailLayout: emailTemplate.emailLayout,
      enabled: emailTemplate.enabled,

    });
    this.content = emailTemplate.content;
    this.contentLoaded = true;
  }

  get f() { return this.templateViewForm.controls; }

}
