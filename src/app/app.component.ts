import { Component, ViewChild, TemplateRef, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


import { ModalDirective } from 'ngx-bootstrap/modal';
import { UserAccountService } from './modules/user-account/services/user-account.service';
import { SetupScreenService } from './modules/setup-screen/services/setup-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  errorTitle = 'angular-idle-timeout';

  public modalRef: BsModalRef;

  @ViewChild('childModal', { static: false }) childModal: ModalDirective;




  title = 'Tool for SQL Server performance Troubleshooting | 24/7 Monitoring and Logging Tool for Microsoft SQL Server | Scheduler for SQL Server Express Edition | Automated System Health Check | Dynamics 365 Business Central Performance Tuning | SQLMantraTools | RSM Softwares Ltd | Tool for Better Navision Performance | AX Performance Troubleshooting';
  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private router: Router,
    private modalService: BsModalService,
    private appService: UserAccountService,
    private setupScreenService: SetupScreenService) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(1800);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(30);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.idleState = 'No longer idle.';
      console.log(this.idleState);
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      this.childModal.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.logout();
      console.log(this.idleState);
      this.router.navigate(['/']);
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = 'You\'ve gone idle!';
      console.log(this.idleState);
      this.childModal.show();
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
      console.log(this.idleState);
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.appService.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        idle.watch();
        this.timedOut = false;
      } else {
        idle.stop();
      }
    });

    // this.reset();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

  hideChildModal(): void {
    this.childModal.hide();
  }

  stay() {
    this.childModal.hide();
    this.reset();
  }

  logout() {
    this.childModal.hide();
    this.appService.setUserLoggedIn(false);
    this.appService.UserLogout('AUTO_LOGOUT');
    this.router.navigate(['/']);
  }

  scrollTop(event) {
    setTimeout(function () { window.scroll(0, 0); }, 200);
  }

  async getlogoutTime() {
    const setupScreen = await this.setupScreenService.getSetupScreen();
    const logoffTime =  setupScreen.autoLogoffTime;
    this.idle.setIdle(logoffTime * 60);
    console.log(this.idle);
  }

  ngOnInit(): void {
    this.getlogoutTime();
  }
}






