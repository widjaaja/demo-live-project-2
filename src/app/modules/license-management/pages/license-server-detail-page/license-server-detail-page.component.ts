import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../../layouts/main/header/header.service';

@Component({
  selector: 'app-license-server-detail-page',
  templateUrl: './license-server-detail-page.component.html',
  styleUrls: ['./license-server-detail-page.component.css']
})
export class LicenseServerDetailPageComponent implements OnInit {

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
