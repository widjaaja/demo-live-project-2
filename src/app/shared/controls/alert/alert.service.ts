import { Injectable } from '@angular/core';

export interface Alert {
  type: string;               // success, info, warning, danger, primary, secondary, light, dark.
  message: any;               // message template || string.
  dismissable: boolean;       // close button enble / disable
  autoClose: boolean;         // auto close enble / disable
  autoCloseIntervel: number;  // auto close intervel
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  alerts: Alert[] = []; // data set
  alert: Alert;
  displayAlert = false;
  constructor() { }

  open(alert: Alert) {
    this.alerts.push(alert);
    if (alert.autoClose) {
      setTimeout(() => this.close(alert), alert.autoCloseIntervel);
    }
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  showAlert(alert: Alert) {
    this.alert = alert;
    this.displayAlert = true;
    setTimeout(function () {
      this.displayAlert = false;
    }.bind(this), 5000);
  }

  closeAlert() {
    this.alert = null;
    this.displayAlert = false;

  }
}
