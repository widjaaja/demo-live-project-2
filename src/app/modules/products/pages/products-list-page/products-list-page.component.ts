import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-products-list-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.css']
})
export class ProductsListPageComponent implements OnInit {
  public contentLoaded = false;
  constructor(private titleService: TitleService, private router: Router, public headerService: HeaderService) {
    titleService.title = 'Manage Products';
    titleService.action1 = 'Manage Products';
    titleService.action2 = 'Dashboard';
    titleService.action2Link = '/admin/dashboard';

  }

  
  ngOnInit(): void {
  }

  AddProduct() {
    this.router.navigateByUrl('/admin/product/add');
  }

  
}
