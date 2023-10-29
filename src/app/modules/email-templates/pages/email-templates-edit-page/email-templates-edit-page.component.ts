import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-templates-edit-page',
  templateUrl: './email-templates-edit-page.component.html',
  styleUrls: ['./email-templates-edit-page.component.css']
})
export class EmailTemplatesEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoEmailTemplate() {
    this.router.navigateByUrl('/admin/email-templates');

  }

}
