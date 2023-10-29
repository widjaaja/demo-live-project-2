import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';@Component({
  selector: 'app-admin-product-add-page',
  templateUrl: './admin-product-add-page.component.html',
  styleUrls: ['./admin-product-add-page.component.css']
})
export class AdminProductAddPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
   }

  
  BacktoProduct() {
    this.router.navigateByUrl('/admin/products');

  }

}
