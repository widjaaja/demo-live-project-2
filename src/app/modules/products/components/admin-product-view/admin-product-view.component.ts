import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-product-view',
  templateUrl: './admin-product-view.component.html',
  styleUrls: ['./admin-product-view.component.css']
})
export class AdminProductViewComponent implements OnInit {
  productViewForm: UntypedFormGroup;
  submitted = false;
  public contentLoaded = false;
  public productCode = '';
  public product: Product;
  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private productService: ProductsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.productCode = routeParams.productsku;
      this.getProductDetail(this.productCode);
    });
    this.productViewForm = this.formBuilder.group({
      userID: [{ value: '', disabled: true }],
      productCode: [{ value: '', disabled: true }],
      description: [{ value: '', disabled: true }],
      licensePeriod: [{ value: '', disabled: true }],
      maintenanceIncluded: [ { value: '', disabled: true }],
      loggingIncluded: [{ value: '', disabled: true }],
      analysisIncluded: [{ value: '', disabled: true }],
      schedulerIncluded: [ { value: '', disabled: true }],
      currency: [{ value: '', disabled: true }],
      listPrice: [{ value: '', disabled: true }],
      unitPriceExVAT: [{ value: '', disabled: true }],
      enabled: [{ value: '', disabled: true }],
      featureProduct: [{ value: '', disabled: true }],
      payOnline: [{ value: '', disabled: true }],
      evaluationOnline: [{ value: '', disabled: true }],
      licenseType: [{ value: '', disabled: true }],
      shortDescription: [{ value: '', disabled: true }],
      serverEdition: [{ value: '', disabled: true }],
    });

    let userId = localStorage.getItem('userId');
    this.productViewForm.patchValue({
      userId: userId,
    });
  }

  async getProductDetail(productCode) {
    let userId = localStorage.getItem('userId');
    this.product = await this.productService.getProductDetail(productCode, userId);
    this.productViewForm.patchValue({
      userID: this.product.userID,
      productCode: this.product.productCode,
      description: this.product.description,
      licensePeriod: this.product.licensePeriod,
      maintenanceIncluded: this.product.maintenanceIncluded,
      loggingIncluded: this.product.loggingIncluded,
      analysisIncluded: this.product.analysisIncluded,
      schedulerIncluded: this.product.schedulerIncluded,
      currency: this.product.currency,
      listPrice: this.product.listPrice,
      unitPriceExVAT: this.product.unitPriceExVat,
      enabled: this.product.enabled,
      featureProduct: this.product.featureProduct,
      payOnline: this.product.payOnline,
      evaluationOnline: this.product.evaluationOnline,
      licenseType: this.product.licenseType,
      shortDescription: this.product.shortDescription,
      serverEdition: this.product.serverEdition,
    });

    this.contentLoaded = true;
  }
}
