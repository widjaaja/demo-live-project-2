import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-setup-screen-list-page',
  templateUrl: './setup-screen-list-page.component.html',
  styleUrls: ['./setup-screen-list-page.component.css']
})
export class SetupScreenListPageComponent implements OnInit {
  constructor(private router: Router, public headerService: HeaderService) { }

  ngOnInit(): void {
  }

  AddSetupScreen() {
    this.router.navigateByUrl('/admin/setup-screens/add-edit');
  }
}
