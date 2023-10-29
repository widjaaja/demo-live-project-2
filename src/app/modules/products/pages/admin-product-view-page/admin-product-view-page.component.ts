import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-view-page',
  templateUrl: './admin-product-view-page.component.html',
  styleUrls: ['./admin-product-view-page.component.css']
})
export class AdminProductViewPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoProduct() {
    this.router.navigateByUrl('/admin/products');
  }
}
