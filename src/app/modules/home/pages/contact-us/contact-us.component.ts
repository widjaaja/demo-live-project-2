import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MetaService } from '../../../../shared/services/meta.service';
import { GlobalsService } from '../../../../globals.service';
import { ContactFormFields } from '../../models/contact';
import { SharedService } from '../../../../shared/services/shared.service';
import { HomeService } from '../../services/home.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactsForm: UntypedFormGroup;
  public Editor = ClassicEditor;
  
  submitted = false;
  constructor(public formBuilder: UntypedFormBuilder, private metaService: MetaService, private globalsService: GlobalsService, private sharedService: SharedService, public homeService: HomeService) { }

  ngOnInit(): void {
    this.metaService.setTitle(this.globalsService.contactUsPageTitle);
    this.metaService.updateMeta(this.globalsService.keywords, this.globalsService.contactUsPageMetaKeyword);
    this.metaService.updateMeta(this.globalsService.description, this.globalsService.contactUsPageMetaDescription);
    this.contactsForm = this.formBuilder.group({
      name: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactsForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.contactsForm.invalid) {
      return;
    }
    let contactFormFields: ContactFormFields = new ContactFormFields();
    contactFormFields.name = this.contactsForm.value['name'];
    contactFormFields.email = this.contactsForm.value['email'];
    contactFormFields.subject = this.contactsForm.value['subject'];
    contactFormFields.company = this.contactsForm.value['company'];
    contactFormFields.moreDetails = this.contactsForm.value['message'];
    contactFormFields.contactNo = this.contactsForm.value['phone'];


    const stringData = JSON.stringify(contactFormFields);
    this.homeService.sendMail(stringData);
    this.sharedService.showMessage({ 'type': 'success', 'message': 'Thanks for contacting us. Our team will reach you in next 24 hours' });

    this.contactsForm.patchValue({
      name: '',
      email: '',
      subject: '',
      company: '',
      message: '',
      phone: '',
    });
    this.submitted = false;
  }

}
