import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { AlertService, Alert } from './../controls/alert/alert.service';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private renderer: Renderer2;

  constructor(
    public rendererFactory: RendererFactory2,
    public alertService: AlertService,
    private sanitizer: DomSanitizer,
    ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }


  // sanitize url
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }


  showMessage(alertDetail) {
    this.closeMessage(alertDetail);
    const tmpAlert: Alert = { type: alertDetail.type, message: alertDetail.message, dismissable: true, autoClose: true, autoCloseIntervel: 8000 };
    this.alertService.showAlert(tmpAlert);
  }

  closeMessage(alertDetail) {
    const tmpAlert: Alert = { type: alertDetail.type, message: alertDetail.message, dismissable: true, autoClose: true, autoCloseIntervel: 0 };
    this.alertService.close(tmpAlert);
  }

}
