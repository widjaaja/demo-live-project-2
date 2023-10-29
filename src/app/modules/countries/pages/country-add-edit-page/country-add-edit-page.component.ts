import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-add-edit-page',
  templateUrl: './country-add-edit-page.component.html',
  styleUrls: ['./country-add-edit-page.component.css']
})
export class CountryAddEditPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  BackCountryList() { 
      this.router.navigateByUrl('/admin/countries');
  }

}
