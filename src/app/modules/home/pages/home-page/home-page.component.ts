import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MailData } from '../../../products/models/products';
import { ProductsService } from '../../../products/services/products.service';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalsService } from '../../../../globals.service';
import { ContactFormFields } from '../../models/contact';
import { HomeService } from '../../services/home.service';
import { SharedService } from '../../../../shared/services/shared.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../../customers/services/customer.service';
import { Customer } from '../../../customers/models/customer';
import { UserAccountService } from '../../../user-account/services/user-account.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  registerForm: UntypedFormGroup;
  submitted = false;
  contactSubmitted = false;
  public Editor = ClassicEditor;
  public customerObj: Customer;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productsService: ProductsService,
    private metaService: Meta,
    private titleService: Title,
    public globalsService: GlobalsService,
    public homeService: HomeService,
    public sharedService: SharedService,
    public route: ActivatedRoute,
    public router: Router,
    private userAccountService: UserAccountService,
    private customerService: CustomerService
  ) {
  }

  ngOnInit(): void {
    const userloggedIn = localStorage.getItem('loggedIn');
    this.userAccountService.setUserLoggedIn(userloggedIn ? true : false);
    this.titleService.setTitle(this.globalsService.homepageTitle);
    this.metaService.updateTag(
      { name: 'description', content: this.globalsService.homepageMetaDescription },
    );
    this.metaService.updateTag(
      { name: 'keywords', content: this.globalsService.homepageMetaKeyword },
    );


    

    this.route.params.subscribe(routeParams => {
      const referrerId = routeParams.partnerRecId;
      if (referrerId !== null && referrerId !== 'undefined' && typeof referrerId !== 'undefined') {
        localStorage.setItem('referrerId', referrerId);
        localStorage.setItem('referrerUrl', referrerId);
      }
      if (referrerId === 'NONE') {
        localStorage.setItem('referrerId', '');
        localStorage.setItem('referrerUrl', '');
      }

      this.router.navigateByUrl('/');
      });


    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    let contactFormFields: ContactFormFields = new ContactFormFields();
    contactFormFields.name = this.registerForm.value['name'];
    contactFormFields.email = this.registerForm.value['email'];
    contactFormFields.subject = this.registerForm.value['subject'];
    contactFormFields.company = this.registerForm.value['company'];
    contactFormFields.moreDetails = this.registerForm.value['message'];
    contactFormFields.contactNo = this.registerForm.value['phone'];


    const stringData = JSON.stringify(contactFormFields);
    this.homeService.sendMail(stringData);
    this.sharedService.showMessage({ 'type': 'success', 'message': 'Thanks for contacting us. Our team will reach you in next 24 hours' });
    this.registerForm.patchValue({
      name: '',
      email: '',
      subject: '',
      company: '',
      message: '',
      phone: '',
    });
    this.submitted = false;
    this.contactSubmitted = true;
  }

}
