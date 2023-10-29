import { Component, OnInit } from '@angular/core';
import { PromotionCodes } from '../../model/promotion';
import { PromotionsService } from '../../promotions.service';
import { Router } from '@angular/router';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-promotions-list',
  templateUrl: './promotions-list.component.html',
  styleUrls: ['./promotions-list.component.css']
})
export class PromotionsListComponent implements OnInit {

  promotions: PromotionCodes;
  contentLoaded = false;
  constructor(private promotionService: PromotionsService, private router: Router, public sharedService: SharedService) { }

  ngOnInit(): void {
    this.getallPromotions();
  }

  async getallPromotions() {
    this.promotions = await this.promotionService.getAllPromotions('');
    this.contentLoaded = true;
  }

  async deleteItem(item) {
    let userId = localStorage.getItem('userId');
    if (confirm("Are you sure to delete promotion: " + item.code)) {
      let result = await this.promotionService.deletePromo(item.code, userId);
      console.log(result);
      if (result['isSuccess'] == true) {
        this.sharedService.showMessage({ 'type': 'success', 'message': 'Promotion ' + item.code + ' deleted Successfully!' });
        this.router.navigateByUrl('/admin/promotions');
      } else {
        this.sharedService.showMessage({ 'type': 'danger', 'message': result['errorMessage'] });
      }
    } else {
      this.router.navigateByUrl('/admin/promotions');
    }
  }

}
