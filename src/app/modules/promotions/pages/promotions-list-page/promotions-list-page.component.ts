import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-promotions-list-page',
  templateUrl: './promotions-list-page.component.html',
  styleUrls: ['./promotions-list-page.component.css']
})
export class PromotionsListPageComponent implements OnInit {

  constructor(private router: Router, public headerService: HeaderService) { }

  ngOnInit(): void {
  }

  AddPromotion() {
    this.router.navigateByUrl('/admin/promotion/add');

  }

}
