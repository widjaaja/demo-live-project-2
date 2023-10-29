import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-templates-view-page',
  templateUrl: './email-templates-view-page.component.html',
  styleUrls: ['./email-templates-view-page.component.css']
})
export class EmailTemplatesViewPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoEmailTemplate() {
    this.router.navigateByUrl('/admin/email-templates');

  }

}
