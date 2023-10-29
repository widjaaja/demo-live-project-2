import { Component, OnInit } from '@angular/core';
import { GlobalsService } from 'src/app/globals.service';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css']
})
export class HeaderMainComponent implements OnInit {
  contact: string = '';
  constructor(public globalService: GlobalsService) { 
    
  }

  ngOnInit(): void {
    this.contact = this.globalService.contact;
  }
}
