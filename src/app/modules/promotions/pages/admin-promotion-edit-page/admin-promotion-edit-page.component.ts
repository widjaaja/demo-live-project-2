import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-promotion-edit-page',
  templateUrl: './admin-promotion-edit-page.component.html',
  styleUrls: ['./admin-promotion-edit-page.component.css']
})
export class AdminPromotionEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoPromotion() {
    this.router.navigateByUrl('admin/promotions');
  }
}
