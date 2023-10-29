import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-gateway-success',
  templateUrl: './gateway-success.component.html',
  styleUrls: ['./gateway-success.component.css']
})
export class GatewaySuccessComponent implements OnInit {
  contentLoaded = false;
  constructor(private route: ActivatedRoute, public productsService: ProductsService) {
    const queryParams = this.route.snapshot.queryParams;
    const redirectId = queryParams['redirect_flow_id'];
    const IsSuccess = queryParams['status'];
    if (queryParams['success']) {
      this.contentLoaded = true;
    } else {
      if (IsSuccess == 'success') {
        this.contentLoaded = true;
        localStorage.removeItem('successCheckout');
      }
      else
        this.completePayment(redirectId);
    }
  }

  ngOnInit(): void {
  }

  async completePayment(redirectId) {
    await this.productsService.completeredirectPayment(redirectId);
    this.contentLoaded = true;
  }

}
