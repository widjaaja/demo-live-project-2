import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-promotion-view-page',
  templateUrl: './admin-promotion-view-page.component.html',
  styleUrls: ['./admin-promotion-view-page.component.css']
})
export class AdminPromotionViewPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoPromotion() {
    this.router.navigateByUrl('admin/promotions');
  }
}
