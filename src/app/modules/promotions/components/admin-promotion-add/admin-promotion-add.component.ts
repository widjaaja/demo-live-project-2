import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PromotionsService } from '../../promotions.service';
import { PromotionCodes } from '../../model/promotion';
import { SharedService } from '../../../../shared/services/shared.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-promotion-add',
  templateUrl: './admin-promotion-add.component.html',
  styleUrls: ['./admin-promotion-add.component.css']
})
export class AdminPromotionAddComponent implements OnInit {
  public promotionCode = '';
  promotionAddForm: UntypedFormGroup;
  submitted = false;
  contentLoaded = false;
  promoCodeObj: PromotionCodes;
  model: NgbDateStruct;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: UntypedFormBuilder, private promotionsService: PromotionsService, private sharedService: SharedService, private calendar: NgbCalendar) { }

  ngOnInit(): void {

    this.promotionAddForm = this.formBuilder.group({
      code: ['', Validators.required],
      endDate: ['', Validators.required],
      qualification: ['', Validators.required],
      qualificationThreshold: ['', Validators.required],
      startDate: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
    });
    this.contentLoaded = true;
  }


  get f() { return this.promotionAddForm.controls; }

  async onSubmit() {
    this.submitted = true;

    //this.promotionAddForm.get('startDate').clearValidators();
    //this.promotionAddForm.get('startDate').updateValueAndValidity();
    //this.promotionAddForm.get('endDate').clearValidators();
    //this.promotionAddForm.get('endDate').updateValueAndValidity();

    if (this.promotionAddForm.invalid) {
      return;
    }
    let promoObj = new PromotionCodes();
    promoObj.code = this.promotionAddForm.value['code'];
    promoObj.qualification = this.promotionAddForm.value['qualification'];
    promoObj.qualificationThreshold = this.promotionAddForm.value['qualificationThreshold'];
    promoObj.startDate = this.promotionAddForm.value['startDate'];
    promoObj.endDate = this.promotionAddForm.value['endDate'];
    promoObj.value = this.promotionAddForm.value['value'];
    promoObj.type = this.promotionAddForm.value['type'];
    let userId = localStorage.getItem('userId');
    promoObj.userID = userId;
    promoObj.startDate = promoObj.startDate['year'] + '-' + promoObj.startDate['month'] + '-' + promoObj.startDate['day'];
    promoObj.endDate = promoObj.endDate['year'] + '-' + promoObj.endDate['month'] + '-' + promoObj.endDate['day'];
    console.log(promoObj);
    let result = await this.promotionsService.addPromo(promoObj);

    console.log(result);
    if (result['status'] == 200) {
      if ((typeof result['body'] != 'undefined') && result['body']['isSuccess'] == true) {
        this.router.navigateByUrl('/admin/promotions');
        this.sharedService.showMessage({ 'type': 'success', 'message': 'Promotion Code added Successfully!' });
      } else {
        this.sharedService.showMessage({ 'type': 'danger', 'message': result['body']['errorMessage'] });
      }
    } else {
      this.sharedService.showMessage({ 'type': 'danger', 'message': result['error'] });
    }
  }
}
