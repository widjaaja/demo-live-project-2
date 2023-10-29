import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {
  products: Product;
  contentLoaded = false;
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getallProducts();
  }

  async getallProducts() {
    this.products = await this.productService.getAllProducts();
    this.contentLoaded = true;
  }

}
