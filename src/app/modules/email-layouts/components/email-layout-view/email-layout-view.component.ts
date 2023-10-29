import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';
import { EmailLayoutsService } from '../../services/email-layouts.service';
import { EmailLayout } from '../../models/email-layout';

@Component({
  selector: 'app-email-layout-view',
  templateUrl: './email-layout-view.component.html',
  styleUrls: ['./email-layout-view.component.css']
})
export class EmailLayoutViewComponent implements OnInit {
  public layoutName = '';
  layoutViewForm: UntypedFormGroup;
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
    this.layoutViewForm = this.formBuilder.group({

      name: [{ value: '', disabled: true }],
      content: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      
    });
  }

  async getLayoutDetail() {
    this.emailLayoutObj = await this.emailLayoutsService.getLayoutDetail(this.layoutName);
    console.log(this.emailLayoutObj);
    let emailLayout = this.emailLayoutObj['emailLayouts'][0];
    this.layoutViewForm.patchValue({
      name: emailLayout.name,
      content: emailLayout.content,
      description: emailLayout.description,
      
    });
    this.content = emailLayout.content;
    this.contentLoaded = true;
  }

  get f() { return this.layoutViewForm.controls; }

}
