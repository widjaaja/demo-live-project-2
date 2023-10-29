import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-setup-screen-edit-page',
  templateUrl: './admin-setup-screen-edit-page.component.html',
  styleUrls: ['./admin-setup-screen-edit-page.component.css']
})
export class AdminSetupScreenEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoSetupScreen() {
    this.router.navigateByUrl('admin/setup-screens');
  }
}
