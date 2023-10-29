import { Injectable } from '@angular/core';
import { SetupScreenApiService } from './api/setup-screen-api.service';
import { SetupScreen } from '../model/setup-screen';

@Injectable({
  providedIn: 'root'
})
export class SetupScreenService {
  setupScreen: SetupScreen;
  constructor(private setupScreenApiService: SetupScreenApiService) { }

  async getSetupScreen() {
    await this.setupScreenApiService.getSetupDetail().then((data: SetupScreen) => {
      this.setupScreen = data;
    });
    return this.setupScreen;
  }

  async updateSetup(setupObj) {
    return await this.setupScreenApiService.updateSetup(setupObj);
  }

  async downloadBrochure() {
    return window.open(window.location.origin + '/api/setup/download/brochure'); /*await this.setupScreenApiService.downloadBrochure();*/
  }
  async downloadSetup() {
    return window.open(window.location.origin + '/api/setup/download/product'); /* await this.setupScreenApiService.downloadSetup();*/
  }
  async donwloadManual() {
    return window.open(window.location.origin + '/api/setup/download/usermanual');  /* await this.setupScreenApiService.donwloadManual();*/
  }


  
}
