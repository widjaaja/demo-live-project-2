import { Component, OnInit, TemplateRef } from '@angular/core';
import { Alert, AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alerts: Alert[]; // data set

  constructor(public alertService: AlertService) {
    this.alerts = this.alertService.alerts;
  }

  ngOnInit() {
  }

  isTemplate(alert: Alert) { return alert.message instanceof TemplateRef; }

}
