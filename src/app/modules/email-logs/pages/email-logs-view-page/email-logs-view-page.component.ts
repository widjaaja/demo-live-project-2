import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-logs-view-page',
  templateUrl: './email-logs-view-page.component.html',
  styleUrls: ['./email-logs-view-page.component.css']
})
export class EmailLogsViewPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  BacktoEmailTemplate() {
    this.router.navigateByUrl('/admin/email-logs');

  }
}
