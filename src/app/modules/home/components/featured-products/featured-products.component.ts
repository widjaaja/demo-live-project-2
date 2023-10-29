import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../products/models/products';
import { ProductsService } from '../../../products/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {
  public featuredProducts: Product;
  public contentLoaded = false;
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getFeaturedProducts();
  }

  async getFeaturedProducts() {
    this.featuredProducts = await this.productService.getFeaturedProducts();
    this.contentLoaded = true;
  }
}
