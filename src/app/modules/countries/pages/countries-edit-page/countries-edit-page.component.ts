import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries-edit-page',
  templateUrl: './countries-edit-page.component.html',
  styleUrls: ['./countries-edit-page.component.css']
})
export class CountriesEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BacktoCountry() {
    this.router.navigateByUrl('/admin/countries');
  }

}
