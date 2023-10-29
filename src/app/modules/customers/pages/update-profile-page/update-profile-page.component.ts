import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile-page',
  templateUrl: './update-profile-page.component.html',
  styleUrls: ['./update-profile-page.component.css']
})
export class UpdateProfilePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoDashboard() {
    this.router.navigateByUrl('/home');
  }
}
