import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormBuilder } from '@angular/forms';
import { EmailLayout } from '../../models/email-layout';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailLayoutsService } from '../../services/email-layouts.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-email-layout-view-page',
  templateUrl: './email-layout-view-page.component.html',
  styleUrls: ['./email-layout-view-page.component.css']
})
export class EmailLayoutViewPageComponent implements OnInit {
  public layoutName = '';
  layoutViewForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  emailLayoutObj: EmailLayout;
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  BacktoEmailLayout() {
    this.router.navigateByUrl('/admin/email-layouts');
  }


}
