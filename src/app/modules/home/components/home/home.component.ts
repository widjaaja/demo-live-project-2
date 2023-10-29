import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/models/products';
import { ProductsService } from '../../../products/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredProducts: Product;
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
    //console.log(this.featuredProducts);
  }

  async getAllProducts() {
    this.featuredProducts = await this.productService.getAllProducts();
    console.log(this.featuredProducts);
  }

}
