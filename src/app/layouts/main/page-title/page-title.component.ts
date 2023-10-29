import { Component, OnInit } from '@angular/core';
import { TitleService } from './title.service';
@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {

  constructor(public titleService: TitleService) { }

  ngOnInit(): void {
  }

}
