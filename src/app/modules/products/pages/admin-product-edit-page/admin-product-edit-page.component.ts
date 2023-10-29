import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-edit-page',
  templateUrl: './admin-product-edit-page.component.html',
  styleUrls: ['./admin-product-edit-page.component.css']
})
export class AdminProductEditPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  BacktoProduct() {
    this.router.navigateByUrl('/admin/products');
  }

}
