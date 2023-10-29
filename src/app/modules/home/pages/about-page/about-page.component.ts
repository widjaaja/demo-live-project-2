import { Component, OnInit } from '@angular/core';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private metaService: MetaService, private globalsService: GlobalsService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.aboutUsPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.aboutUsPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.aboutUsPageMetaDescription);
  }

}
