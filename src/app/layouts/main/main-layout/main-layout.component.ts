import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  pageYoffset = 0;
  constructor(public scroll: ViewportScroller) { }
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.pageYoffset = window.pageYOffset;
  }


  ngOnInit(): void {
  }

  ScrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

  scrollTop(event) {
    setTimeout(function () { window.scroll(0, 0); }, 2)
  }

}
