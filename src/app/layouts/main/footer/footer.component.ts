import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyrightYr: number;
  constructor() { }

  ngOnInit(): void {
    this.copyrightYr = new Date().getFullYear();

  }

}
