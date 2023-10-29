import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
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
