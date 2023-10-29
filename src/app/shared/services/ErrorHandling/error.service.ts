import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
//import { ToastService } from '../../controls/toast/toast.service';
@Injectable({
  providedIn: 'root'
})
export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector, 
    //private toastService: ToastService
    ) { }
  handleError(error: any) {
    const router = this.injector.get(Router);
    if (Error instanceof HttpErrorResponse) {
      console.log(error.status);
    } else {
      //this.toastService.show(error, { classname: 'bg-danger text-light', delay: 20000 });
      console.log(error);
    }
  }
}
