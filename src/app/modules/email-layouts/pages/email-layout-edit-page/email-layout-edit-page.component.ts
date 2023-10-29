import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-layout-edit-page',
  templateUrl: './email-layout-edit-page.component.html',
  styleUrls: ['./email-layout-edit-page.component.css']
})
export class EmailLayoutEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoEmailLayout() {
    this.router.navigateByUrl('/admin/email-layouts');
  }

}
