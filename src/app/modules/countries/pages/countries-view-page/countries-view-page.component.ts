import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-view-page',
  templateUrl: './countries-view-page.component.html',
  styleUrls: ['./countries-view-page.component.css']
})
export class CountriesViewPageComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoCountry() {
    this.router.navigateByUrl('/admin/countries');
  }


}
