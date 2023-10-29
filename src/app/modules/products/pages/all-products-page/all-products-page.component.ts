import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';

@Component({
  selector: 'app-all-products-page',
  templateUrl: './all-products-page.component.html',
  styleUrls: ['./all-products-page.component.css']
})
export class AllProductsPageComponent implements OnInit {
  public products: Product;
  public contentLoaded = false;

  constructor(private productService: ProductsService, private metaService: MetaService, private globalsService: GlobalsService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.contactUsPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.contactUsPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.contactUsPageMetaDescription);
    this.getallActiveProducts();
  }

  async getallActiveProducts() {
    this.products = await this.productService.getAllProducts();
    this.contentLoaded = true;
  }

}
