import { Injectable } from '@angular/core';
import { PromotionCodes } from './model/promotion';
import { PromotionsApiService } from './services/api/promotions-api.service';

@Injectable({
  providedIn: 'root'
})
export class PromotionsService {
  promotions: PromotionCodes;
  constructor(private promotionsApiService: PromotionsApiService) { }

  async getAllPromotions(userId) {
    await this.promotionsApiService.getAllPromotionCodes(userId).then((data: PromotionCodes) => {
      this.promotions = data;
    });
    return this.promotions;
  }

  async getPromotionByCode(promotionCode, userId) {
    let promotionData: PromotionCodes;
    await this.promotionsApiService.getPromotionByCode(promotionCode, userId).then((data: PromotionCodes) => {
      promotionData = data;
    });
    return promotionData;
  }

  async addPromo(promoObj) {
    return await this.promotionsApiService.addPromo(promoObj);
  }

  async updatePromo(promoObj) {
    return await this.promotionsApiService.updatePromo(promoObj);
  }

  async deletePromo(promoCode, userId) {
    return await this.promotionsApiService.deletePromo(promoCode, userId);
  }
}
