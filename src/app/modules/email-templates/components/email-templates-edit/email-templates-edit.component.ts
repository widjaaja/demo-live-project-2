import { Component, OnInit } from '@angular/core';
import { EmailTemplate } from '../../models/email-template';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailTemplatesService } from '../../services/email-templates.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-email-templates-edit',
  templateUrl: './email-templates-edit.component.html',
  styleUrls: ['./email-templates-edit.component.css']
})
export class EmailTemplatesEditComponent implements OnInit {
  public templateName = '';
  templateEditForm: UntypedFormGroup;
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
    this.templateEditForm = this.formBuilder.group({

      name: [{ value: '', disabled: true }],
      content: ['', Validators.required],
      description: ['', Validators.required],
      subject: ['', Validators.required],
      fromName: ['', Validators.required],
      fromAddress: ['', Validators.required],
      enabled: [''],

    });
  }

  async getLayoutDetail() {
    this.emailTemplateObj = await this.emailTemplatesService.getTemplateDetail(this.templateName);

    let emailTemplate = this.emailTemplateObj['emailSettings'][0];
    this.templateEditForm.patchValue({
      name: emailTemplate.name,
      content: emailTemplate.content,
      description: emailTemplate.description,
      subject: emailTemplate.subject,
      fromName: emailTemplate.fromName,
      fromAddress: emailTemplate.fromAddress,
      enabled: emailTemplate.enabled,

    });
    this.content = emailTemplate.content;
    this.contentLoaded = true;
  }

  get f() { return this.templateEditForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.templateEditForm.invalid) {
      return;
    }
    let templateObj = new EmailTemplate();
    templateObj.name = this.emailTemplateObj['emailSettings'][0].name;
    templateObj.emailLayout = this.emailTemplateObj['emailSettings'][0].emailLayout;
    templateObj.description = this.templateEditForm.value['description'];
    templateObj.content = this.templateEditForm.value['content'];
    templateObj.fromAddress = this.templateEditForm.value['fromAddress'];
    templateObj.fromName = this.templateEditForm.value['fromName'];
    templateObj.subject = this.templateEditForm.value['subject'];
    let result = await this.emailTemplatesService.updateTemplate(templateObj);
    this.router.navigateByUrl('/admin/email-templates');
    this.sharedService.showMessage({ 'type': 'success', 'message': 'Email Template updated Successfully!' });
  }

}
