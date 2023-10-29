import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/products';
import { ProductsService } from '../../services/products.service';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {
  productEditForm: UntypedFormGroup;
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
    this.productEditForm = this.formBuilder.group({
      userID: ['', Validators.required],
      productCode: ['', Validators.required],
      description: ['', Validators.required],
      licensePeriod: ['', Validators.required],
      maintenanceIncluded: [''],
      loggingIncluded: [''],
      analysisIncluded: [''],
      schedulerIncluded: [''],
      currency: ['', Validators.required],
      listPrice: ['', Validators.required],
      unitPriceExVAT: ['', Validators.required],
      enabled: ['', Validators.required],
      featureProduct: ['', Validators.required],
      payOnline: [''],
      evaluationOnline: [''],
      licenseType: [''],
      shortDescription: ['', Validators.required],
      serverEdition: [''],
    });
  }

  async getProductDetail(productCode) {
    let userId = localStorage.getItem('userId');
    this.product = await this.productService.getProductDetail(productCode, userId);
    this.productEditForm.patchValue({
      userID: userId,
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

  get f() { return this.productEditForm.controls; }

  async onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productEditForm.invalid) {
      console.log(this.productEditForm);
      return;

    }

    let productObj = new Product();
    productObj.userID = this.productEditForm.value['userID'];
    productObj.description = this.productEditForm.value['description'];
    productObj.productCode = this.productEditForm.value['productCode'];
    productObj.shortDescription = this.productEditForm.value['shortDescription'];
    productObj.maintenanceIncluded = (this.productEditForm.value['maintenanceIncluded']) ? 1: 0;
    productObj.schedulerIncluded = (this.productEditForm.value['schedulerIncluded']) ?1: 0;
    productObj.analysisIncluded = (this.productEditForm.value['analysisIncluded']) ?1: 0;
    productObj.loggingIncluded = (this.productEditForm.value['loggingIncluded']) ?1: 0;
    productObj.listPrice = this.productEditForm.value['listPrice'];
    productObj.unitPriceExVat = this.productEditForm.value['unitPriceExVAT'];
    productObj.currency = this.productEditForm.value['currency'];
    productObj.payOnline = (this.productEditForm.value['payOnline']) ?1: 0;
    productObj.licensePeriod = this.productEditForm.value['licensePeriod'];
    productObj.enabled = (this.productEditForm.value['enabled']) ?1: 0;
    productObj.evaluationOnline = (this.productEditForm.value['evaluationOnline']) ?1: 0;
    productObj.serverEdition = this.productEditForm.value['serverEdition'];
    productObj.licenseType = this.productEditForm.value['licenseType'];
    productObj.featureProduct = (this.productEditForm.value['featureProduct']) ? 1 : 0;

    const result = await this.productService.updateProduct(productObj);
    console.log(result);
    if (result['body']['isSuccess'] === true) {
      this.router.navigateByUrl('/admin/products');
      this.sharedService.showMessage({ 'type': 'success', 'message': 'Product updated Successfully!' });
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
    }
  }
}
