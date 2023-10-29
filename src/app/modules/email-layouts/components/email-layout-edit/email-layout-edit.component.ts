import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { EmailLayout } from '../../models/email-layout';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailLayoutsService } from '../../services/email-layouts.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-email-layout-edit',
  templateUrl: './email-layout-edit.component.html',
  styleUrls: ['./email-layout-edit.component.css']
})
export class EmailLayoutEditComponent implements OnInit {
  public layoutName = '';
  layoutEditForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  emailLayoutObj: EmailLayout;
  content = '';
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private emailLayoutsService: EmailLayoutsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.layoutName = routeParams.layoutName;
      this.getLayoutDetail();
    });
    this.layoutEditForm = this.formBuilder.group({

      name: ['', Validators.required],
      content: ['', Validators.required],
      description: ['', Validators.required],

    });
  }

  async getLayoutDetail() {
    this.emailLayoutObj = await this.emailLayoutsService.getLayoutDetail(this.layoutName);
    console.log(this.emailLayoutObj);
    let emailLayout = this.emailLayoutObj['emailLayouts'][0];
    this.layoutEditForm.patchValue({
      name: emailLayout.name,
      content: emailLayout.content,
      description: emailLayout.description,

    });
    this.content = emailLayout.content;
    this.contentLoaded = true;
  }

  get f() { return this.layoutEditForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.layoutEditForm.invalid) {
      return;
    }
    let layoutObj = new EmailLayout();
    layoutObj.name = this.emailLayoutObj['emailLayouts'][0].name;
    layoutObj.description = this.layoutEditForm.value['description'];
    layoutObj.content = this.layoutEditForm.value['content'];
    let result = await this.emailLayoutsService.updateLayout(layoutObj);
      this.router.navigateByUrl('/admin/email-layouts');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Email Layout updated Successfully!' });
  }
}
