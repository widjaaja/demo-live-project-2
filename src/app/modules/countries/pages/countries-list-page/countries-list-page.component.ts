import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../layouts/main/page-title/title.service';
import { Router } from '@angular/router';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-countries-list-page',
  templateUrl: './countries-list-page.component.html',
  styleUrls: ['./countries-list-page.component.css']
})
export class CountriesListPageComponent implements OnInit {
  constructor(private router: Router, public headerService: HeaderService) { }

  ngOnInit(): void {
  }

  AddCountry() {
    this.router.navigateByUrl('/admin/countries/add');

  }

}
