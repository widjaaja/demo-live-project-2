import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-setup-screen-view-page',
  templateUrl: './admin-setup-screen-view-page.component.html',
  styleUrls: ['./admin-setup-screen-view-page.component.css']
})
export class AdminSetupScreenViewPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoSetupScreen() {
    this.router.navigateByUrl('admin/setup-screens');
  }
}
