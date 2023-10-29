import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-promotion-add-page',
  templateUrl: './admin-promotion-add-page.component.html',
  styleUrls: ['./admin-promotion-add-page.component.css']
})
export class AdminPromotionAddPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoPromotion() {
    this.router.navigateByUrl('admin/promotions');
  }
}
